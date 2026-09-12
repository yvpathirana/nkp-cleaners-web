# NKP Cleaners SEO measurement baseline

Use this checklist before comparing the new local SEO content with the previous site.

## Google Business Profile

Use the website link below in the profile so visits from Google Business Profile can be separated from normal organic search:

`https://nkpcleaners.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`

Suggested business description:

> NKP Cleaners provides residential, commercial, and specialized cleaning services across Piliyandala, Kesbewa, Boralesgamuwa, Moratuwa, Panadura, Colombo, Horana, and nearby areas. Our services include home and apartment cleaning, office cleaning, deep cleaning, sofa and mattress cleaning, carpet cleaning, pressure washing, floor care, and post-construction cleaning. Contact us by phone or WhatsApp to discuss your property, location, and required service and receive a quotation.

Before saving the profile, verify the primary category, secondary categories, phone number, business hours, and every listed service against the services NKP currently provides.

## GA4 conversion events

The web app sends these events:

| Event | Trigger | Important parameters |
| --- | --- | --- |
| `click_whatsapp` | WhatsApp CTA click | `page_path`, `cta_position`, `service_name` or `location_name` |
| `click_phone` | Phone CTA click | `page_path`, `cta_position`, `service_name` or `location_name` |
| `lead_form_submit` | Successful lead form submission | `page_path`, `form_name` |
| `quote_request` | Other quote or booking action | `page_path`, `cta_position` |

Mark the four actions as key events in GA4 after they have appeared in the Events report. The current site has no lead form, so `lead_form_submit` is ready for future use but will not fire yet.

## Search Console baseline

Record the previous 28 days before judging the changes:

- Total clicks, impressions, click-through rate, and average position.
- Top queries containing Piliyandala, Colombo, Panadura, Horana, and nearby areas.
- Top pages by clicks and impressions.
- Indexed and excluded page counts.
- Sitemap submission status.

## Weekly business view

Track outcomes in one row per week:

| Week | Organic visits | GBP actions | Calls | WhatsApp clicks | Qualified leads | Booked jobs | Revenue |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |

Search traffic is useful, but booked jobs and revenue should decide which services and locations receive more work.
