---
sidebar_position: 2
---

# Adding a Custom Domain to Cloudflare Pages

## Add a custom domain

### To add a custom domain:

1. Log in to the Cloudflare dashboard.
2. Select your account in Account Home > Pages.
3. Select your Pages project > Custom domains.
4. Select Set up a domain.
5. Provide the domain that you would like to serve your Cloudflare Pages site on and select Continue.
6. Cloudflare will generate a custom CNAME record that will need to be added to DNS provider for your desired subdomain. The following is an example of the CNAME record that Cloudflare will generate:

| Type             | Name           | Content             | TTL     |
|------------------|----------------|---------------------|---------|
| CNAME            | subdomain      | page-name.pages.dev | Auto    | 

7. Add the CNAME record to your DNS provider and wait for it to become available.

For more information see https://developers.cloudflare.com/pages/platform/custom-domains/

