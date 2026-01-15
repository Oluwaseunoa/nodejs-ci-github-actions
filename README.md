# CI PROJECT REPORT

## Project Title

**Implementing Continuous Integration with GitHub Actions Using Matrix Builds, Code Quality Checks, and Secure Secrets Management**

---

## 1. Abstract

This project demonstrates the practical implementation of Continuous Integration (CI) using GitHub Actions in a Node.js application. The workflow integrates automated testing, code quality checks, matrix builds across multiple Node.js versions, and secure handling of sensitive information using GitHub Secrets. The objective is to ensure early detection of defects, maintain code quality, and follow industry-standard DevOps practices in a production-ready manner.

---

## 2. Introduction

Continuous Integration is a core DevOps practice that enables developers to integrate code changes frequently while automatically validating functionality and quality. Without CI, defects are often detected late, leading to costly fixes and unstable releases. This project applies CI principles by automating linting, testing, and build validation using GitHub Actions.

<<<<<<< HEAD
The implementation aligns strictly with best practices of Implementing Continuous Integration with GitHub Actions, focusing on matrix builds and code quality enforcement.
=======
The implementation aligns strictly with **Module 3: Implementing Continuous Integration with GitHub Actions**, focusing on matrix builds and code quality enforcement.
>>>>>>> 6bd228aa17336c94ee63078ef3dcf601c8db34e3

---

## 3. Project Objectives

* Implement Continuous Integration using GitHub Actions
* Configure matrix builds to test across multiple Node.js versions
* Enforce code quality using ESLint
* Execute automated tests using Jest
* Improve build efficiency using dependency caching
* Secure sensitive configuration values using GitHub Secrets
* Validate CI execution through Pull Requests

---

## 4. Tools and Technologies Used

* **GitHub & GitHub Actions** – CI automation platform
* **Node.js & npm** – Runtime and dependency management
* **Jest** – Automated testing framework
* **ESLint (Flat Config)** – Static code analysis tool
* **YAML** – Workflow configuration language
* **GitHub Secrets** – Secure storage of sensitive values

---

## 5. Project Implementation

### Step 1: Repository Creation

A new GitHub repository was created with a README file to initialize the project.

📸 Screenshot: `./img/1.create_nodejs-ci-github-actions_repo_with_README.png`

---

### Step 2: Repository Cloning

The repository HTTPS URL was copied and cloned locally to begin development.

📸 Screenshots:

* `./img/2.copy_copy_repo_https_url.png`
* `./img/3.clone_repo_using_the_copied_url_and_navigate_into_it.png`

---

### Step 3: Node.js Project Initialization

The project was initialized using npm to generate a `package.json` file.

```bash
npm init -y
```

📸 Screenshot: `./img/4.initialize_with_npm.png`

---

### Step 4: Dependency Installation

Required development dependencies were installed, including ESLint and Jest.

```bash
npm install --save-dev eslint jest
```

📸 Screenshots:

* `./img/5.npm_install_eslint_dev_jest.png`
* `./img/5b.list_jest_o_verify_installation.png`

---

### Step 5: ESLint Configuration

ESLint was initialized and later updated to use the modern Flat Config with Node.js compatibility.

```js
<<<<<<< HEAD
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // App / source files
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },

  // CommonJS files
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  // ✅ Jest test files
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
=======
export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.node, ...globals.jest },
    },
    extends: ["js/recommended"],
  },
>>>>>>> 6bd228aa17336c94ee63078ef3dcf601c8db34e3
]);
```

📸 Screenshots:

* `./img/6.initialize_eslint.png`
* `./img/9b.replace_default_eslint_config_mjs_to_use_node_instead_of_browser_if_applicable.png`

---

### Step 6: Test Implementation

A real Jest test was created to ensure the CI pipeline validates functional correctness.

```js
test("CI pipeline test", () => {
  expect(2 + 2).toBe(4);
});
```

📸 Screenshots:

* `./img/8.add_a_real_test_required_for_ci.png`
* `./img/9.edit_app-test-js.png`

---

### Step 7: Package Script Configuration

The `package.json` file was updated to include lint and test scripts.

```json
"scripts": {
  "test": "jest",
  "lint": "eslint ."
}
```

📸 Screenshot: `./img/10.update_package-json_script_with_test_jest_and_lint_eslint.png`

---

### Step 8: Local Validation

Tests and linting were executed locally to confirm correctness before CI.

```bash
npm run lint
npm test
```

📸 Screenshot: `./img/11.ran_npm_test_and_npm_lint_to_test_locally.png`

---

### Step 9: Git Ignore Configuration

The `node_modules` directory was excluded from version control.

📸 Screenshots:

* `./img/12.add_git_ignore.png`
* `./img/13.add_node_modules_to_gitignore.png`

---

### Step 10: GitHub Actions Workflow Creation

A CI workflow was created to automate linting and testing using matrix builds.

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
```

📸 Screenshots:

* `./img/16.create_ci_yml_file.png`
* `./img/17.add_ci_workflow_matrix_lint_and_test.png`
* `./img/18.strategy_block_runs_two_node_version_in_parallel.png`

---

### Step 11: Dependency Caching

npm caching was enabled to improve build performance.

```yaml
cache: npm
```

📸 Screenshot: `./img/19.npm_cache_line_allows_faster_build_better_than_manual.png`

---

### Step 12: Code Quality & Test Execution in CI

The workflow runs ESLint and Jest as mandatory checks.

📸 Screenshots:

* `./img/20.npm_run_lint_do_code_quality_check.png`
* `./img/21.npm_run_test_performs_automated_test.png`

---

## 6. Security Enhancement: GitHub Secrets Integration

To enhance security, sensitive values are stored using GitHub Secrets instead of hardcoding them.

### Secret Creation

* Navigate to **Repository → Settings → Secrets and variables → Actions**
* Add a new secret:

  * **Name:** `APP_SECRET`
  * **Value:** A secure token or key

📸 Screenshot (if applicable): stored securely by GitHub

### Using Secrets in Workflow

```yaml
env:
  APP_SECRET: ${{ secrets.APP_SECRET }}
```

This ensures sensitive data is masked and never exposed in logs.

---

## 7. CI Validation Using Pull Requests

A new branch was created, changes were pushed, and a Pull Request triggered the CI workflow automatically.

📸 Screenshots:

* `./img/26.on_terminal_create_a_new_branch_called_create-file-txt.png`
* `./img/29.branch_shows_on_github_click_compare_and_pull_request.png`
* `./img/31.workflow_triggers_by_PR.png`
* `./img/32.all_check_passed_and_workflow_run_with_no_error.png`

---

## 8. Results and Observations

* CI workflow ran successfully across multiple Node.js versions
* All lint and test checks passed
* Workflow executed in parallel, reducing total build time
* Secrets were securely handled

---

## 9. Conclusion

This project successfully implemented a secure, production-ready Continuous Integration pipeline using GitHub Actions. By integrating matrix builds, automated testing, code quality checks, dependency caching, and GitHub Secrets, the project meets all Module 3 requirements and reflects real-world DevOps best practices. The implementation ensures reliability, scalability, and security in modern software development workflows.

---

## 10. Future Improvements

* Add code coverage reporting
* Integrate deployment (CD)
* Enforce branch protection rules
* Add security scanning tools
