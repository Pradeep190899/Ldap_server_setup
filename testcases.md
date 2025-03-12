# TEST CASES - LDAP Server Setup

## Submitted By  
**Pradeep Singh**  

## Submitted To  
**Vipin Tripathi**  

## Test Case Version  
**1**  

## Reviewer Name  
**Moumita Roy**  

---

## Goal  
To set up an LDAP server inside a Podman container on a Linux system, configure user management using an LDIF file, perform user operations (add, delete, search), and integrate it with an Apache web server to create a UI that displays user details.

---

## Test Environment  
- **OS:** Linux (Ubuntu)  
- **Container Platform:** Podman  
- **LDAP Server:** 389 Directory Server  
- **Web Server:** Apache  
- **UI:** JavaScript (JS)  

---

## Table of Contents  
1. [TC1: Installation of 389 Directory Server](#tc1-installation-of-389-directory-server)  
2. [TC2: Setting up 389 Directory Server Instance](#tc2-setting-up-389-directory-server-instance)  
3. [TC3: Configuring Base DN and Organizational Units](#tc3-configuring-base-dn-and-organizational-units)  
4. [TC4: Creating and Managing Users via LDIF](#tc4-creating-and-managing-users-via-ldif)  
5. [TC5: LDAP User Operations (Add, Delete, Search)](#tc5-ldap-user-operations-add-delete-search)  
6. [TC6: Integrating LDAP with Apache Server](#tc6-integrating-ldap-with-apache-server)  
7. [TC7: UI for User Search and Display](#tc7-ui-for-user-search-and-display)  
8. [TC8: LDAP Authentication Testing](#tc8-ldap-authentication-testing)  

---

## TC1: Installation of 389 Directory Server  
**Scenario:** Install the LDAP server inside a Podman container.  
**Remarks:** Installation is a prerequisite for all other operations; successful installation confirms proper setup of required dependencies.  

### Given:  
- The system is a Linux machine with package manager access.  

### When:  
- The administrator installs 389 Directory Server using the package manager.  

### Then:  
- The installation should complete successfully and the version should be displayed when checked.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC2: Setting up 389 Directory Server Instance  
**Scenario:** Configure and initialize an LDAP instance.  
**Remarks:** A running LDAP instance ensures the directory service is operational for further configurations.  

### Given:  
- 389 Directory Server is installed.  

### When:  
- The administrator creates a new instance interactively and starts the directory service.  

### Then:  
- The instance should be created and the service should be running.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC3: Configuring Base DN and Organizational Units  
**Scenario:** Define a directory structure within LDAP.  
**Remarks:** Setting up the correct hierarchical structure ensures proper organization and access management of LDAP data.  

### Given:  
- A new LDAP instance is running.  

### When:  
- The administrator configures a Base DN (e.g., `dc=example,dc=com`) and adds organizational units (e.g., `ou=Users,dc=example,dc=com`).  

### Then:  
- The directory structure should be successfully created.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC4: Creating and Managing Users via LDIF  
**Scenario:** Add user entries using an LDIF file.  
**Remarks:** Using LDIF files ensures efficient batch processing of user accounts.  

### Given:  
- The directory structure is configured.  

### When:  
- The administrator creates an LDIF file and applies it using `ldapadd`.  

### Then:  
- Users should be added successfully to the directory.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC5: LDAP User Operations (Add, Delete, Search)  
**Scenario:** Perform CRUD operations on LDAP users.  
**Remarks:** Ensures that LDAP supports user lifecycle management correctly.  

### Given:  
- LDAP users are present in the directory.  

### When:  
- The administrator runs `ldapsearch`, `ldapadd`, and `ldapdelete` commands.  

### Then:  
- The respective operations should execute successfully.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC6: Integrating LDAP with Apache Server  
**Scenario:** Configure Apache to authenticate users via LDAP.  
**Remarks:** LDAP-based authentication provides centralized access control and user verification.  

### Given:  
- LDAP is running with user entries.  

### When:  
- The administrator configures Apache to authenticate users against LDAP using `mod_authnz_ldap`.  

### Then:  
- Users should be able to log in via Apache using their LDAP credentials.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC7: UI for User Search and Display  
**Scenario:** Create a web UI to fetch and display LDAP user details.  
**Remarks:** Provides an interactive way for users to query and retrieve LDAP directory data.  

### Given:  
- LDAP is running and Apache is configured.  

### When:  
- A user enters a username in the UI search box.  

### Then:  
- The UI should retrieve and display user details from LDAP.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_  

---

## TC8: LDAP Authentication Testing  
**Scenario:** Verify LDAP user authentication.  
**Remarks:** Ensures that authentication mechanisms work correctly and enforce security policies.  

### Given:  
- Users exist in LDAP.  

### When:  
- A user tries to authenticate using valid and invalid credentials.  

### Then:  
- Authentication should succeed for valid credentials and fail for invalid ones.  

**Test Run**  
- **Date:** _(To be filled)_  
- **Result:** _(To be filled)_  

**Testing Outputs**  
_(Paste your output/screenshots here)_

