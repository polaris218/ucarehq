---
title: Security
author: hellohudson
type: feature
date: 2016-08-20T05:06:28.000Z
url: /security/
featured_image: settings.jpg
feature_colour: '#000000'
svg_code: <svg height="40px" fill="none" stroke="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10"><circle cx="12" cy="15" r=".5"/><path stroke-linecap="round" d="M12 15.5v3"/><path d="M3.5 9.5h17v14h-17zM6.5 6C6.5 2.962 8.962.5 12 .5s5.5 2.462 5.5 5.5v3.5h-11V6z"/></g></svg>
show_on_home_page: true
header_alignment: center
---

## How secure is your data?

Having all your church data hosted in the Cloud may sound neat, but you probably hear the stories of data breaches and far too often. Here is how we secure our systems to protect your data at every level.

## No compromise

As our systems are available on the internet we take a defense in depth approach with multiple layers of controls put in place to secure your data, our approach covers physical, technical, procedural and personnel security.

The UCare service and your data is hosted in secure datacenters in the United States, EU and Australia. These datacenters are manned by 24x7 armed security, surveillance and biometric access controls. In fact, physical access to the servers that contain your data is not allowed. All data is automatically wiped from the servers prior to physical access being granted.

Our datacenters are designed to withstand natural disasters but in case this fails your data is replicated to a second datacenter in the same country, if failure occurs our systems detect it and switch to the secondary datacenter within seconds. Apart from GEO replication, a full backup of your data is taken every day, differential backups occur hourly, and transaction log backups every five minutes. What this means is that we have so many levels of backup that hardware failure or natural disaster is unlikely to cause more than five minutes of downtime. In fact you can view our system status and track record any time at [status.ucarehq.com](http://status.ucarehq.com/).

Whether your data is in-transit between our service and you, hosted on our infrastructure or stored at-rest as a backup we apply end-to-end encryption to ensure that even if accessed it wouldn’t be readable by the attacker. Your data is also never stored outside a secure datacenter, and certainly not on employee’s devices. And when data needs to be accessed it is done through encrypted protected VPN connections to our datacenters that are secured via multi-factor authentication and IP lock-down. Any time access occurs in this way it is fully logged and audited.

We follow the principle of least privilege with all parts of the UCare infrastructure, this simply means we only grant the minimum level of access required to fulfill a specific role or task.

UCare processes financial transactions using third party services from Stripe and PushPay. Other services providers rely on the fact that Stripe and PushPay store payment info in a [PCI DSS compliant](https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard) way to avoid auditing and testing their systems. While we never see or store credit card information in UCare (it goes directly to the payment service) we want to ensure that this is maintained and that our infrastructure is PCI DSS compliant. As such each quarter we employ third-party security experts to perform vulnerability scanning and real-world penetration testing of UCare. This helps ensure that not just financial info is secure but also the check-in details for your children.

Our engineers participate in secure code training every year. This training covers OWASP Top 10 security flaws, common attack vectors, and UCare security controls. This way when they are crafting new or review existing features they are continually looking for vulnerabilities. The engineers conduct threat analysis and the QA teams review and test all code before it goes in to production. Our engineers always work on new features in our test and staging environment, never in our production environment with your live data. In front of each environment with deploy firewalls to protect from vulnerabilities and vulnerability tools that also help to detect flaws.

We believe though that security is a responsibility we share with our customers, that’s why we provide your admins with the tools they need to grant people access to just what they need. Security areas also allow you to set up different levels of access, you can restrict down to the tinniest detail what information is accessible by each team and campus. When granting access you never set a person’s password, instead they do it the first time they sign in and then we store the password using a [one-way cryptographic algorithm](https://en.wikipedia.org/wiki/Cryptographic_hash_function), along with rate limiting this helps make brute-force attacks ineffective. Finally, we avoid password options where we can, preferring multi-factor authentication that is far simpler and safer.

### Get started quickly

Create security areas and grant people access to exactly what you want. The set up options will grow as you need and we’re there to guide you with every step.

### People that care

We know it is frustrating when thing don’t work as expected, that's why we invest in a great support team to help with questions you have. We also have plenty of articles, videos and training available.

### Continual improvement

We’re always refining and improving based on our customer’s usage and needs. We want to work together to make UCare even better, when you have an idea or feedback feel free to share.