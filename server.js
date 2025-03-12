const ldap = require('ldapjs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow frontend to access backend
app.use(express.json());

const LDAP_URL = "ldap://localhost:389"; // Change if needed
const BASE_DN = "dc=example,dc=com"; // Update based on your LDAP setup
const BIND_DN = "cn=admin,dc=example,dc=com"; // Update with your LDAP admin DN
const BIND_PASSWORD = "admin_password"; // Update with the correct password

// LDAP Client Connection
const client = ldap.createClient({ url: LDAP_URL });

app.get('/search', (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    client.bind(BIND_DN, BIND_PASSWORD, (err) => {
        if (err) {
            return res.status(500).json({ error: "LDAP Bind failed", details: err });
        }

        const searchOptions = {
            filter: `(cn=*${username}*)`, // Searches for matching common names (CN)
            scope: 'sub',
            attributes: ['cn', 'mail', 'uidNumber'] // Fetch only required attributes
        };

        const results = [];
        client.search(BASE_DN, searchOptions, (err, searchRes) => {
            if (err) return res.status(500).json({ error: "LDAP Search failed", details: err });

            searchRes.on('searchEntry', (entry) => {
                results.push(entry.object);
            });

            searchRes.on('end', () => {
                if (results.length === 0) {
                    return res.status(404).json({ error: "User not found" });
                }
                res.json(results);
            });
        });
    });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
