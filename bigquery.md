
# Organizing Resources in GCP
## Resource Hierarchy in GCP
<img src="https://d33wubrfki0l68.cloudfront.net/eaddeba5e864fe63444fe247f7a7277b427e42c2/ed88b/gcpimages/02-architecture/resource-hierarchy-overview.png">

- Organization > Folder > Project > Resources
### Resources
- Are creaeted in projects
### Folder
- Can contain multiple projects
### Organization
- Can contain multiple folders

## Recommended Resource Hierarchy for enterprises
- Create separate projects for different environment:
  - Complete isolation between test and production environments
- Create separate folders for each department:
  - Isolate production applications of one department from another
  - We can create a shared folder for shared resources.
- One project per application per environment:
  - Let consider 2 apps: A1 and A2
  - Let's assume we need 2 environments: Dev and Prod
  - In the ideal world you will create 4 projects: A1-dev, A1-prod, A2-dev, A2-prod
    - Isolates environments from each other
    - DEV changes will not break PROD
    - Grant all developers complete access(create,delete, deploy) to DEV projects.
    - Provide production access to operations team only.


# Billing Accounts
- Billing Account is mandatory for creating resources in project.
  - Billing account contains the payment details
  - Every project with active resources should be associated with a Billing Account.
- Billing account can be associated with one or more projects.
- You can have multiple billing accounts in an Organization.
- (RECOMMENDATION) Create billing accounts representing your organization structure.
  - A Startup can have just one billing account.
  - A large enterprise can have separate billing account for each department
- Two types:
  - Self serve: Billed directly to Credit card or Bank Account.
  - Invoiced: Generate invoices(used by large enterprises)

## Managing Billing - Budgets, Alerts and Exports
- Setup cloud billing budget to avoid surprises:
  - (RECOMMENDED) Configure alerts.
  - Default alert thresholds set at 50%, 90% & 100%
    - Send alerts to Pub Sub (optional)
    - Billing admins and billing account users are alerted by e-mail.
- Billing data can be exported(on a schedule) to:
  - BigQuery
    - If you want to visualize it
  - Cloud Storage
    - For history/archiving


# IAM Best practices
## Principle of least privilege
- Give least possible privilege needed for a role!
  - Basic roles are NOT recommended.
    - Prefer predefined roles when possible
  - Use service accounts with minimum privileges
    - Use different service accounts for diffferent apps/purposes.
## Separation of Duties
- Involve atleast 2 people in sensitive tasks:
  - Example: have separate deployer and traffic migrator roles
    - App Engine provides app engine deployer and App Engine service admin roles
      - App Engine Deployer can deploy new version but can't shift traffic
      - App Engine Service Admin can shift traffic but can't deploy new version.
