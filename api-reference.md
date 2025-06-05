# API Reference

This document provides the full API reference for Beckn-compliant endpoints used in the Unified Krishi Interface (UKI) for Soil Testing. The APIs are grouped by platform role: Beckn Application Platform (BAP), Beckn Gateway (BG), and Beckn Provider Platform (BPP). Each endpoint includes its purpose, method, and request/response schema.

<h3>Table of Contents</h3>

<details>
<summary>&emsp;<a href="#role-wise-api-endpoint-summary">Role-wise API Endpoint Summary</a></summary>
</details>

<details>
<summary>&emsp;<a href="#beckn-application-platform-bap">Beckn Application Platform (BAP)</a></summary>

-   [`/on_search`](#on_search)
-   [`/on_select`](#on_select)
-   [`/on_init`](#on_init)
-   [`/on_confirm`](#on_confirm)
-   [`/on_status`](#on_status)
-   [`/on_track`](#on_track)
-   [`/on_cancel`](#on_cancel)
-   [`/on_update`](#on_update)
-   [`/on_rating`](#on_rating)
-   [`/on_support`](#on_support)

</details>

<details>
<summary>&emsp;<a href="#beckn-gateway-bg">Beckn Gateway (BG)</a></summary>

-   [`/search`](#search)
-   [`/on_search`](#on_search)

</details>

<details>
<summary>&emsp;<a href="#beckn-provider-platform-bpp">Beckn Provider Platform (BPP)</a></summary>

-   [`/search`](#search)
-   [`/select`](#select)
-   [`/init`](#init)
-   [`/confirm`](#confirm)
-   [`/status`](#status)
-   [`/track`](#track)
-   [`/cancel`](#cancel)
-   [`/rating`](#rating)
-   [`/support`](#support)

</details>

<details>
<summary>&emsp;<a href="#developer-notes">Developer Notes</a></summary>
</details>

## Role-wise API Endpoint Summary

<table>
  <thead>
    <tr>
      <th>Platform Role</th>
      <th>Phase</th>
      <th>API Endpoints</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">Beckn Application Platform&nbsp;(BAP)</td>
      <td>Discovery</td>
      <td><code>/on_search</code></td>
    </tr>
    <tr>
      <td>Order</td>
      <td><code>/on_select</code>, <code>/on_init</code>, <code>/on_confirm</code></td>
    </tr>
    <tr>
      <td>Fulfillment</td>
      <td><code>/on_status</code>, <code>/on_track</code>, <code>/on_cancel</code>, <code>/on_update</code></td>
    </tr>
    <tr>
      <td>Post-Fulfillment</td>
      <td><code>/on_rating</code>, <code>/on_support</code></td>
    </tr>
    <tr>
      <td rowspan="1">Beckn Gateway&nbsp;(BG)</td>
      <td>Discovery</td>
      <td><code>/search</code>, <code>/on_search</code></td>
    </tr>
    <tr>
      <td rowspan="4">Beckn Provider Platform&nbsp;(BPP)</td>
      <td>Discovery</td>
      <td><code>/search</code></td>
    </tr>
    <tr>
      <td>Order</td>
      <td><code>/select</code>, <code>/init</code>, <code>/confirm</code></td>
    </tr>
    <tr>
      <td>Fulfillment</td>
      <td><code>/status</code>, <code>/track</code>, <code>/cancel</code></td>
    </tr>
    <tr>
      <td>Post-Fulfillment</td>
      <td><code>/rating</code>, <code>/support</code></td>
    </tr>
  </tbody>
</table>


## Beckn Application Platform (BAP)

### `/on_search`

-   **Purpose:** Return catalog in response to search.
-   **Phase:** Discovery

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_search`
    -   `message`: `Catalog`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":        "on_search",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "34de7811-f3d8-4d8a-b00a-51e9734eaa77",
    "timestamp":     "2025-06-05T19:10:03Z",
    "ttl":           "PT30M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },

  "message": {
    "catalog": {
      "descriptor": {
        "name": "Soil Testing Services",
        "short_desc": "Lab and on-farm soil analyses"
      },
      "providers": [
        {
          "id": "soil-lab-x.in",
          "descriptor": {
            "name": "Soil Lab X",
            "short_desc": "ISO-certified agri diagnostics"
          },
          "items": [
            {
              "id": "soil-npk-package",
              "descriptor": { "name": "NPK & pH Analysis" },
              "price": {
                "currency": "INR",
                "value": "450"
              },
              "matched": true
            }
          ],
          "fulfillments": [
            {
              "id": "home-pickup",
              "type": "home",
              "rateable": true
            }
          ],
          "payments": [
            {
              "collected_by": "bpp",
              "type": "ON-FULFILLMENT"
            }
          ]
        }
      ],
      "ttl": "3600"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_select`

- **Purpose:** Return quote and draft order.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_select`
    -   `message`: `MessageForOn_select`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_search",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "f43f94d5-2d02-4b4e-8662-66d2c5b5987f",
    "timestamp":     "2025-06-05T19:11:30Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEQg...=="
  },
  "message": {
    "catalog": {
      "descriptor": {
        "name": "Soil-Lab X Service Catalog",
        "short_desc": "In-field soil sampling and lab analysis"
      },
      "fulfillments": [
        {
          "id":   "home-collection",
          "type": "home",
          "rateable": true
        }
      ],
      "payments": [
        {
          "id": "cod-on-fulfillment",
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT"
        }
      ],
      "providers": [
        {
          "id": "soil-lab-x.in",
          "descriptor": { "name": "Soil Lab X" },
          "categories": [
            {
              "id": "soil_testing",
              "descriptor": { "name": "Soil Testing" }
            }
          ],
          "fulfillments": [
            { "id": "home-collection", "type": "home" }
          ],
          "items": [
            {
              "id": "soil-npk-package",
              "descriptor": {
                "name": "NPK + pH Analysis",
                "short_desc": "Macro-nutrient & acidity profile"
              },
              "price": {
                "currency": "INR",
                "value": "450.00"
              },
              "category_ids": [ "soil_testing" ],
              "fulfillment_ids": [ "home-collection" ],
              "rateable": true
            }
          ],
          "locations": [
            {
              "id": "delhi-center",
              "descriptor": { "name": "Delhi Processing Centre" },
              "gps": "28.6139,77.2090",
              "address": "Connaught Place, New Delhi 110001"
            }
          ],
          "ttl":  "3600"
        }
      ],
      "ttl": "3600",
      "exp": "2025-06-05T20:11:30Z"
    }
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_init`

- **Purpose:** Return updated order info and payment terms.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_init`
    -   `message`: `MessageForOn_init`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":        "on_init",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "3e742eeb-5d4d-41aa-8c1e-73d6b8a3c2e7",
    "timestamp":     "2025-06-05T19:12:00Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbP...=="
  },

  "message": {
    "order": {
      "id": "ORD-20250605-00123",
      "status": "ACTIVE",
      "provider": {
        "id": "soil-lab-x.in",
        "descriptor": { "name": "Soil Lab X" }
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": { "name": "Soil NPK Analysis" },
          "quantity": {
            "selected": { "count": 1 }
          },
          "price": {
            "currency": "INR",
            "value": "300.00"
          }
        }
      ],
      "fulfillments": [
        {
          "id": "FULF-1",
          "type": "home",
          "state": { "descriptor": { "code": "Pending" } },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": { "area_code": "110001" }
            }
          }
        }
      ],
      "payments": [
        {
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT",
          "status": "NOT-PAID",
          "params": {
            "transaction_id": "PAY-20250605-00123",
            "amount": "300.00",
            "currency": "INR"
          }
        }
      ],
      "created_at": "2025-06-05T19:12:00Z"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_confirm`

- **Purpose:** Confirm the order and share transaction ID.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_confirm`
    -   `message`: `MessageForOn_confirm`
    -   `error`: `Error`

<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":         "on_confirm",
    "version":        "1.1.0",
    "bap_id":         "soil-bap.krishi.network",
    "bap_uri":        "https://soil-bap.krishi.network",
    "bpp_id":         "soil-lab-x.in",
    "bpp_uri":        "https://soil-lab-x.in/beckn/",
    "transaction_id": "a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":     "3e9e2bea-b47c-44e7-b59d-4deae8a5f5ad",
    "timestamp":      "2025-06-05T19:12:00Z",
    "ttl":            "PT10M",
    "key":            "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },
  "message": {
    "order": {
      "id": "ORD-20250605-0001",
      "status": "ACTIVE",
      "provider": {
        "id": "soil-lab-x.in",
        "descriptor": { "name": "Soil Lab X" }
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": { "name": "NPK & pH Soil Analysis" },
          "price":   { "currency": "INR", "value": "350.00" },
          "quantity":{ "selected": { "count": 1 } }
        }
      ],
      "fulfillments": [
        {
          "id":   "FUL-20250605-0001",
          "type": "home",
          "tracking": true,
          "state": {
            "descriptor": { "code": "CONFIRMED" },
            "updated_at": "2025-06-05T19:12:00Z"
          },
          "customer": {
            "person":  { "name": "Farmer Ram" },
            "contact": { "phone": "9876543210" }
          },
          "agent": {
            "person": { "name": "Field Technician" }
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": { "area_code": "110001" }
            }
          }
        }
      ],
      "payments": [
        {
          "collected_by": "bpp",
          "type":         "ON-FULFILLMENT",
          "status":       "NOT-PAID",
          "params":       { "amount": "350.00", "currency": "INR" }
        }
      ],
      "created_at": "2025-06-05T19:11:00Z"
    }
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_status`

- **Purpose:** Provide order status.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_status`
    -   `message`: `MessageForOn_status`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":        "on_status",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",   // same as /search
    "message_id":    "0e71d5ba-8d7b-45ae-814f-2e9dcf5f4108",   // new for this callback
    "timestamp":     "2025-06-05T19:12:30Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },
  "message": {
    "order": {
      "id": "SOILTEST-ORD-20250605-001",
      "status": "ACTIVE",
      "type": "DEFAULT",
      "provider": {
        "id": "soil-lab-x.in",
        "descriptor": { "name": "Soil Lab X" }
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": { "name": "Soil NPK Analysis" },
          "quantity": { "selected": { "count": 1 } },
          "price": { "currency": "INR", "value": "499" }
        }
      ],
      "fulfillments": [
        {
          "id": "FULF-1",
          "type": "home",
          "state": {
            "descriptor": { "name": "Sample Scheduled" },
            "updated_at": "2025-06-05T19:10:00Z",
            "updated_by": "soil-lab-x.in"
          },
          "customer": {
            "person": {
              "name": "Farmer Arun"
            },
            "contact": {
              "phone": "+911234567890"
            }
          },
          "agent": {
            "person": { "name": "Field Technician Raj" }
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": "Farm Plot 42, Village Alpha, Delhi 110001"
            }
          }
        }
      ],
      "payments": [
        {
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT",
          "status": "NOT-PAID",
          "params": {
            "transaction_id": "PAY-20250605-001",
            "amount": "499",
            "currency": "INR"
          }
        }
      ],
      "created_at": "2025-06-05T19:06:00Z",
      "updated_at": "2025-06-05T19:10:00Z"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_track`

- **Purpose:** Return tracking data.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_track`
    -   `message`: `MessageForOn_track`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_track",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn/",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "52d55cb3-0d60-4f0a-bebd-3d9ff993f1a6",
    "timestamp":     "2025-06-05T19:12:00Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },
  "message": {
    "tracking": {
      "id":   "trk-a51f4f9d",
      "url":  "https://soil-lab-x.in/track/a51f4f9d",
      "location": {
        "gps": "28.6140,77.2095",
        "address": { "area_code": "110001" }
      },
      "status": "active"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_cancel`

- **Purpose:** Confirm cancellation.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_cancel`
    -   `message`: `MessageForOn_cancel`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_cancel",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "b6c2ddf9-2329-46d0-88b3-54d6e9c2a4f1",
    "timestamp":     "2025-06-05T19:12:05Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },
  "message": {
    "order": {
      "id": "ORD-001",
      "status": "CANCELLED",
      "provider": {
        "id": "soil-lab-x.in"
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": {
            "name": "Soil NPK Analysis"
          },
          "quantity": {
            "selected": { "count": 1 }
          },
          "price": {
            "currency": "INR",
            "value": "500"
          }
        }
      ],
      "fulfillments": [
        {
          "id": "FULF-1",
          "type": "home",
          "state": {
            "descriptor": {
              "code": "Cancelled"
            },
            "updated_at": "2025-06-05T19:11:50Z"
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": { "area_code": "110001" }
            }
          }
        }
      ],
      "cancellation": {
        "time": "2025-06-05T19:11:45Z",
        "cancelled_by": "CONSUMER",
        "reason": {
          "id": "user_changed_mind",
          "descriptor": { "name": "User requested cancellation" }
        }
      }
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_update`

- **Purpose:** Notify updates in order or fulfillment state.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_update`
    -   `message`: `MessageForOn_update`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_update",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "c2d771e0-8e9b-4d55-9d2b-5b6dce1a7f31",
    "timestamp":     "2025-06-05T19:12:30Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEz8...=="
  },
  "message": {
    "order": {
      "id": "ST-20250605-0001",
      "status": "ACTIVE",
      "provider": {
        "id": "soil-lab-x.in",
        "descriptor": { "name": "Soil Test Lab X" }
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": { "name": "Soil NPK Test" },
          "quantity": {
            "selected": { "count": 1 }
          }
        }
      ],
      "fulfillments": [
        {
          "id": "ful-1",
          "type": "home",
          "state": {
            "descriptor": { "code": "SampleCollected" },
            "updated_at": "2025-06-05T19:10:00Z"
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": { "area_code": "110001" }
            }
          }
        }
      ],
      "payments": [
        {
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT",
          "status": "NOT-PAID"
        }
      ]
    }
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_rating`

- **Purpose:** Acknowledge or forward received feedback.
- **Phase:** Post-Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_rating`
    -   `message`: `MessageForOn_rating`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":        "on_rating",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "6e3de569-5269-404c-ac2f-4ef3d7480c13",
    "timestamp":     "2025-06-05T19:15:00Z",
    "ttl":           "PT30S",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE4p...=="
  },
  "message": {
    "feedback_form": {
      "form": {
        "url":       "https://soil-lab-x.in/forms/soil-rating-feedback.html",
        "mime_type": "text/html"
      },
      "required": false
    }
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_support`

- **Purpose:** Provide support resolution or contact.
- **Phase:** Post-Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_support`
    -   `message`: `MessageForOn_support`
    -   `error`: `Error`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_support",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "f0e3b3f4-155d-48c8-8a05-8c6e0a0e7f25",
    "timestamp":     "2025-06-05T19:15:00Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEk9...=="
  },
  "message": {
    "support": {
      "ref_id":         "SOILTEST-REF-2025-0001",
      "callback_phone": "+91-9876543210",
      "phone":          "+91-1800123456",
      "email":          "support@soil-lab-x.in",
      "url":            "https://soil-lab-x.in/support"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

## Beckn Gateway (BG)

### `/search`

- **Purpose:** Accept search from BAP and forward to eligible BPPs.
- **Phase:** Discovery

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForSearch`
    -   `message`: `MessageForSearch`

<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "search",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "d7e6b0e9-11d9-4ab0-91a3-8c68d1f8f4c2",
    "timestamp":     "2025-06-05T19:10:00Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEp3...=="
  },
  "message": {
    "intent": {
      "category": { "id": "soil_testing" },
      "item":     { "id": "soil-npk-package" },
      "fulfillment": {
        "type": "home",
        "end":  {
          "location": {
            "gps": "28.6139,77.2090",
            "address": { "area_code": "110001" }
          }
        }
      }
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/on_search`

- **Purpose:** Receive `on_search` from BPP and forward to BAP.
- **Phase:** Discovery

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForOn_search`
    -   `message`: `Catalog`
    -   `error`: `Error`

<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":   { "code": "std:011" }
    },
    "action":        "on_search",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"a51f4f9d-6b3f-40d1-9b14-0d9b4f7c2a01",
    "message_id":    "f43f94d5-2d02-4b4e-8662-66d2c5b5987f",
    "timestamp":     "2025-06-05T19:11:30Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEQg...=="
  },
  "message": {
    "catalog": {
      "descriptor": {
        "name": "Soil-Lab X Service Catalog",
        "short_desc": "In-field soil sampling and lab analysis"
      },
      "fulfillments": [
        {
          "id":   "home-collection",
          "type": "home",
          "rateable": true
        }
      ],
      "payments": [
        {
          "id": "cod-on-fulfillment",
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT"
        }
      ],
      "providers": [
        {
          "id": "soil-lab-x.in",
          "descriptor": { "name": "Soil Lab X" },
          "categories": [
            {
              "id": "soil_testing",
              "descriptor": { "name": "Soil Testing" }
            }
          ],
          "fulfillments": [
            { "id": "home-collection", "type": "home" }
          ],
          "items": [
            {
              "id": "soil-npk-package",
              "descriptor": {
                "name": "NPK + pH Analysis",
                "short_desc": "Macro-nutrient & acidity profile"
              },
              "price": {
                "currency": "INR",
                "value": "450.00"
              },
              "category_ids": [ "soil_testing" ],
              "fulfillment_ids": [ "home-collection" ],
              "rateable": true
            }
          ],
          "locations": [
            {
              "id": "delhi-center",
              "descriptor": { "name": "Delhi Processing Centre" },
              "gps": "28.6139,77.2090",
              "address": "Connaught Place, New Delhi 110001"
            }
          ],
          "ttl":  "3600"
        }
      ],
      "ttl": "3600",
      "exp": "2025-06-05T20:11:30Z"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

## Beckn Provider Platform (BPP)

### `/search`

- **Purpose:** Initiate a search for services based on user intent.
- **Phase:** Discovery

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForSearch`
    -   `message`: `MessageForSearch`

<details><summary>Sample Payload</summary>
<br>
  
```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": {
        "code": "IND"
      },
      "city": {
        "code": "std:011"
      }
    },
    "action": "search",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id": "9a131c50-3153-4e35-9fd5-838fabe4c6fc",
    "timestamp": "2025-06-05T19:05:00Z",
    "ttl": "PT10M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },
  "message": {
    "intent": {
      "category": {
        "id": "soil_testing"
      },
      "item": {
        "id": "soil-npk-package"
      },
      "fulfillment": {
        "type": "home",
        "end": {
          "location": {
            "gps": "28.6139,77.2090",
            "address": {
              "area_code": "110001"
            }
          }
        }
      },
      "payment": {
        "collected_by": "bpp",
        "type": "ON-FULFILLMENT"
      },
      "descriptor": {
        "name": "Soil nutrient testing at farm"
      },
      "tags": [
        {
          "descriptor": {
            "name": "Crop Type"
          },
          "list": [
            {
              "descriptor": {
                "name": "Wheat"
              },
              "value": "wheat"
            }
          ]
        }
      ]
    }
  }
}
```
</details>

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

-   **Response Code:** `200` – Acknowledgement

### `/select`

- **Purpose:** Submit selection of service/item.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForSelect`
    -   `message`: `MessageForSelect`

<details><summary>Sample Payload</summary>
<br>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action":        "select",
    "version":       "1.1.0",
    "bap_id":        "soil-bap.krishi.network",
    "bap_uri":       "https://soil-bap.krishi.network",
    "bpp_id":        "soil-lab-x.in",
    "bpp_uri":       "https://soil-lab-x.in/beckn",
    "transaction_id":"b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":    "2cc2e7a2-d5ed-45e1-a2cc-068e0d8c5b9f",
    "timestamp":     "2025-06-05T19:07:30Z",
    "ttl":           "PT10M",
    "key":           "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },

  "message": {
    "order": {
      "provider": {
        "id": "soil-lab-x.in"
      },

      "items": [
        {
          "id":       "soil-npk-package",
          "quantity": {
            "selected": { "count": 1 }
          },
          "price": {
            "currency": "INR",
            "value":    "500"
          }
        }
      ],

      "fulfillments": [
        {
          "id":   "fulfillment-1",
          "type": "home"
        }
      ],

      "quote": {
        "id":   "quote-9876",
        "price": {
          "currency": "INR",
          "value":    "500"
        },
        "ttl": "PT30M"
      },

      "payments": [
        {
          "collected_by": "bpp",
          "type":         "ON-FULFILLMENT",
          "status":       "NOT-PAID"
        }
      ]
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/init`

- **Purpose:** Initialize order with billing/shipping info.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForInit`
    -   `message`: `MessageForInit`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "init",
    "version": "1.1.0",
    "bap_id":  "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":     "6d2a8e4e-0c29-4732-93f2-2c7db9c9f3c1",
    "timestamp": "2025-06-05T19:10:00Z",
    "ttl":       "PT10M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },

  "message": {
    "order": {
      "provider": {
        "id": "soil-lab-x.in",
        "descriptor": { "name": "Soil Lab X" }
      },

      "items": [
        {
          "id": "soil-npk-package",
          "quantity": {
            "selected": { "count": 1 }
          },
          "descriptor": { "name": "Soil NPK Analysis – Farm Pickup" },
          "price": {
            "currency": "INR",
            "value": "500"
          }
        }
      ],

      "fulfillments": [
        {
          "id":   "fulfillment1",
          "type": "home",
          "customer": {
            "person": { "name": "Ramesh Kumar" },
            "contact": { "phone": "9123456789" }
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": {
                "area_code": "110001"
              }
            }
          }
        }
      ],

      "payments": [
        {
          "id": "pay-on-fulfillment",
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT",
          "status": "NOT-PAID",
          "params": {
            "amount": "500",
            "currency": "INR"
          }
        }
      ],

      "quote": {
        "id": "989121b2-7b19-46aa-882e-884e1f7061c4",
        "price": {
          "currency": "INR",
          "value":    "500"
        },
        "ttl": "PT30M"
      },

      "billing": {
        "name":  "Ramesh Kumar",
        "address": "Farm #42, Village XYZ, Delhi 110001",
        "phone":  "9123456789",
        "email":  "ramesh.k@example.com"
      },

      "created_at": "2025-06-05T19:10:00Z"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/confirm`

- **Purpose:** Final confirmation of order.
- **Phase:** Order

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForConfirm`
    -   `message`: `MessageForConfirm`

<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "confirm",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "bpp_id": "soil-lab-x.in",
    "bpp_uri": "https://soil-lab-x.in/beckn/",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":     "d0d16693-4e10-49ce-a22e-bbf3e83f7c64",
    "timestamp":      "2025-06-05T19:10:00Z",
    "ttl":            "PT10M",
    "key":            "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },
  "message": {
    "order": {
      "id": "7a1f94b2-b3ca-4a3f-9151-4c62f1c9bb32",
      "provider": {
        "id": "soil-lab-x.in"
      },
      "items": [
        {
          "id": "soil-npk-package",
          "descriptor": { "name": "Soil NPK Test" },
          "quantity": {
            "selected": { "count": 1 }
          },
          "price": {
            "currency": "INR",
            "value": "500.00"
          }
        }
      ],
      "fulfillments": [
        {
          "id":   "FUL-1",
          "type": "home",
          "customer": {
            "person": { "name": "Ram Kumar" },
            "contact": { "phone": "9123456789" }
          },
          "end": {
            "location": {
              "gps": "28.6139,77.2090",
              "address": "110001, Delhi"
            }
          }
        }
      ],
      "quote": {
        "price": {
          "currency": "INR",
          "value": "500.00"
        },
        "breakup": [
          {
            "title": "NPK Analysis",
            "price": { "currency": "INR", "value": "500.00" }
          }
        ]
      },
      "payments": [
        {
          "collected_by": "bpp",
          "type": "ON-FULFILLMENT",
          "status": "NOT-PAID"
        }
      ],
      "billing": {
        "name": "Ram Kumar",
        "address": "Village Road, Delhi, 110001",
        "phone": "9123456789"
      },
      "created_at": "2025-06-05T19:10:00Z"
    }
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/status`

- **Purpose:** Request status of an order.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForStatus`
    -   `message`: `MessageForStatus`
 
<details><summary>Sample Payload</summary>
<br>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "status",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id": "5c9c476e-6c7f-4105-b87f-2c48cf6b53e1",
    "timestamp": "2025-06-05T20:15:00Z",
    "ttl": "PT10M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },
  "message": {
    "order_id": "f0d7a9e3-1b89-4b3e-8d9c-0995b46e1af2"
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/track`

- **Purpose:** Track real-time order status (if applicable).
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForTrack`
    -   `message`: `MessageForTrack`
 
<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "track",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "bpp_id": "soil-lab-x.in",
    "bpp_uri": "https://soil-lab-x.in/beckn",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id": "29df4ee5-b60c-4e7c-bdcc-63ea3ef71909",
    "timestamp": "2025-06-05T19:10:00Z",
    "ttl": "PT5M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEK1a2FbX1YjK..."
  },
  "message": {
    "order_id": "ORD-f8a3d337-eab1-4c9e-bc14-934bf1a5c3b7",
    "callback_url": "https://soil-bap.krishi.network/callbacks/track"
  }
}
```

</details>

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/cancel`

- **Purpose:** Cancel an active order.
- **Phase:** Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForCancel`
    -   `message`: `MessageForCancel`

<details><summary>Sample</summary>
<br>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "cancel",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "bpp_id": "soil-lab-x.in",
    "bpp_uri": "https://soil-lab-x.in/beckn",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":     "2eaa4953-cd4b-43f1-a5a5-6ad411ca64bc",
    "timestamp": "2025-06-05T20:10:00Z",
    "ttl": "PT10M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEkWZ9..."
  },
  "message": {
    "order_id": "soil-order-12345",
    "cancellation_reason_id": "CHANGE_OF_MIND",
    "descriptor": {
      "name": "Buyer requested cancellation",
      "code": "change_of_mind",
      "short_desc": "Farmer no longer requires soil test"
    }
  }
}
```
</details>

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/rating`

- **Purpose:** Submit a service or item rating.
- **Phase:** Post-Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForRating`
    -   `message`: `MessageForRating`

<details><summary>Sample Payload</summary>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "rating",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "bpp_id": "soil-lab-x.in",
    "bpp_uri": "https://soil-lab-x.in/beckn/",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":     "d0ae4b5d-6e1a-48fb-8cd9-4d1f1c6c8659",
    "timestamp": "2025-06-05T19:45:00Z",
    "ttl": "PT10M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAExxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
  },
  "message": {
    "ratings": [
      {
        "rating_category": "Order",
        "id": "order-76ab1234",
        "value": "5"
      },
      {
        "rating_category": "Fulfillment",
        "id": "fulfillment-ef98abcd",
        "value": "4"
      }
    ]
  }
}
```

</details>


-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

### `/support`

- **Purpose:** Submit a support query or complaint.
- **Phase:** Post-Fulfillment

-   **Method:** `POST`
-   **Request Body Schema:**

    -   `context`: `ContextForSupport`
    -   `message`: `MessageForSupport`
 
<details><summary>Sample Payload</summary>
<br>

```json
{
  "context": {
    "domain": "agri.soil",
    "location": {
      "country": { "code": "IND" },
      "city":    { "code": "std:011" }
    },
    "action": "support",
    "version": "1.1.0",
    "bap_id": "soil-bap.krishi.network",
    "bap_uri": "https://soil-bap.krishi.network",
    "bpp_id": "soil-lab-x.in",
    "bpp_uri": "https://soil-lab-x.in/beckn",
    "transaction_id": "b9c11300-2244-4b8a-9201-54a1d236f4c2",
    "message_id":     "d1f77610-d5de-4b55-a2e6-62d481c2cc23",
    "timestamp": "2025-06-05T19:15:00Z",
    "ttl": "PT5M",
    "key": "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAFv0x4fsd2..."
  },
  "message": {
    "support": {
      "ref_id": "ORD-20250605-0001",
      "callback_phone": "+91-9888877777",
      "phone":          "+91-1122334455",
      "email":          "support@soil-lab-x.in",
      "url":            "https://soil-lab-x.in/support"
    }
  }
}
```

</details>
 

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`


## Assumptions Made

| **Category**               | **Assumption / Guideline**                                                                            | **Applies To**                                 | **UKI-Specific & Version Notes**                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Required fields**        | Only properties listed in a `required:` array are mandatory; everything else is optional.             | All schemas (`Context`, `Intent`, etc.)        | UKI permits sparse `Intent` objects at `/search`; BPPs must still handle them.           |
| **Action enum**            | `context.action` must exactly match the endpoint (`"search"`, `"on_search"`, etc.).                   | `Context.action`                               | Enforced by `enum` override in the OpenAPI for every route.                              |
| **Version string**         | Use **the exact semantic-version string** mandated by the network (major.minor.patch).                | `Context.version`                              | UKI sandbox ≈ **`1.1.0`**. Older pilots may still require `core_version: 0.9.x` instead. |
| **UUIDs**                  | `transaction_id` and `message_id` are UUID-v4 strings generated per request.                          | `Context`                                      | Required by UKI validators for de-duplication and session-tracking.                      |
| **Timestamp format**       | All date-time fields follow RFC 3339 (`2025-06-05T19:10:04Z`).                                        | `Context.timestamp`, `Time.timestamp`, etc.    | Mandatory for UKI BG/BPP signature windows.                                              |
| **TTL / Duration**         | `ttl` and other durations use ISO 8601 (`PT10M`, `P1D`).                                              | `Context.ttl`, `Time.duration`                 | UKI often enforces a ≤ 30 min TTL on discovery calls.                                    |
| **Domain code**            | `context.domain` must be a code published in the network registry.                                    | `Context.domain`, `Subscriber.domain`          | UKI: `agri.soil`, `agri.input`, `agri.market`, etc.                                      |
| **Location structure**     | Preferred hierarchy: `context.location.country.code`, `city.code`, plus optional `gps` / `area_code`. | `Context.location`, `Fulfillment.end.location` | UKI discovery filters on `area_code` for pin-level routing.                              |
| **Subscriber IDs**         | `bap_id`, `bpp_id` are fully-qualified domain names (FQDNs).                                          | `Context`                                      | Must exactly match UKI registry entries.                                                 |
| **Subscriber URIs**        | `bap_uri`, `bpp_uri` are HTTPS URLs that share the same base domain as their corresponding IDs.       | `Context`                                      | Fails registry checks if mismatched.                                                     |
| **Public key**             | `context.key` is a base-64 public encryption key (or omitted if the network disables encryption).     | `Context.key`                                  | UKI onboarding supplies one per subscriber key-pair.                                     |
| **Item & Category IDs**    | Values must exist in the advertising BPP’s catalog.                                                   | `Intent.item.id`, `Intent.category.id`         | Example IDs: `soil-npk-package`, `soil_testing`.                                         |
| **Fulfillment type**       | Code like `"home"`, `"lab"`, `"virtual"`; must be from network policy list.                           | `Intent.fulfillment.type`                      | UKI currently supports `"home"` sample pickup.                                           |
| **Payment terms**          | Typical combo: `collected_by: "bpp"`, `type: "ON-FULFILLMENT"`; adjust per BPP capability.            | `Intent.payment`                               | Mirrors most agri-lab business models.                                                   |
| **Tags**                   | Optional arrays for extended filters (`crop`, `soil_type`, urgency, etc.).                            | `Intent.tags`, catalog metadata                | Strongly recommended by UKI for smart search ranking.                                    |
| **Descriptor usage**       | `Intent.descriptor.name` can carry free-text (voice / NLP query).                                     | `Intent.descriptor`                            | Helps UKI gateway with fuzzy matching.                                                   |
| **Flexible intent**        | Partial intents (only location or only category) are valid; BPPs must gracefully respond.             | `Intent`                                       | UKI discovery mandates tolerant matching.                                                |
| **Catalog response flags** | Items may include `matched`, `related`, `recommended` booleans.                                       | `Item` in `on_search` catalog                  | UKI-style BPP samples set `matched: true` for exact hits.                                |
| **Extra / unknown fields** | Ignored unless `additionalProperties: false` is present; safe to include metadata for internal use.   | All objects                                    | UKI validator is permissive but warns on unknown top-level keys.                         |

## Developer Notes

-   All API timestamps must follow a common format.

-   During development, leverage the Beckn sandbox environment and mock BPPs to simulate soil test services.
-   Validate payloads against the Beckn schema before sending; inconsistencies in nested structures (`quote`, `fulfillment`, etc.) often go unnoticed without strict validation.
-   Log all incoming and outgoing payloads with headers for debugging asynchronous flows.
-   Pay attention to `error` objects in all `on_*` responses; display user-friendly messages based on `code` and `message` fields.
-   Implement retry mechanisms for non-200 responses where idempotent (e.g. `search`, `status`).
-   Test for edge cases like partial catalog matches, empty `on_search` results, or rejected confirmations.
