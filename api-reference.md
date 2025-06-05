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
    "version": "1.0.0",
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

| **Category**             | **Assumption**                                                                              | **Applies To**                          | **UKI-Specific Notes**                                            |
| ------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------- |
| **1. Required Fields**   | Only fields marked in `required:` are enforced. Others are optional by default.             | All schemas (`Context`, `Intent`, etc.) | UKI allows sparse intents in early search.                        |
| **2. UUID Format**       | `transaction_id`, `message_id` must be valid UUID v4 strings.                               | `Context`                               | Required by sandbox validators.                                   |
| **3. ISO DateTime**      | `timestamp`, `valid_from`, `valid_to` use RFC3339.                                          | `Context`, `Authorization`, `Time`      | Mandatory in UKI sandbox APIs.                                    |
| **4. ISO Duration**      | `ttl`, `duration` must use ISO 8601 (e.g., `PT10M`).                                        | `Context.ttl`, `Time.duration`          | Required for request expiration.                                  |
| **5. Location Format**   | Use `country.code`, `city.code`, `gps`, and/or `area_code`.                                 | `Context.location`, `Fulfillment.end`   | UKI recommends `area_code` for pin-level resolution.              |
| **6. Domain Code**       | Must be a valid domain code from registry (e.g., `agri.soil`).                              | `Context.domain`, `Subscriber.domain`   | UKI uses granular codes like `agri.soil`, `agri.input`.           |
| **7. City Code**         | Use Beckn-standard codes (`std:011` = Delhi).                                               | `Context.location.city.code`            | UKI uses `std:` format throughout.                                |
| **8. Subscriber IDs**    | `bap_id`, `bpp_id` must be FQDNs (e.g., `soil-bap.krishi.network`).                         | `Context`                               | Must match UKI registry entries.                                  |
| **9. Subscriber URIs**   | `bap_uri`, `bpp_uri` must be HTTPS URLs containing the same domain as `*_id`.               | `Context`                               | UKI registry validation enforces this.                            |
| **10. Action Enum**      | `action` must exactly be `"search"` for `/search`.                                          | `Context.action`                        | Validated in schema via `enum: [search]`.                         |
| **11. Key Format**       | `key` must be a registered base64 public encryption key.                                    | `Context.key`                           | UKI registry uses this for request signature validation.          |
| **12. Versioning**       | Use `"1.1.0"` unless otherwise agreed.                                                      | `Context.version`                       | UKI uses `1.1.0` for all sandbox endpoints.                       |
| **13. Item & Category**  | Use real `item.id`, `category.id` from the BPP catalog.                                     | `Intent.item`, `Intent.category`        | UKI BPPs expose soil test kits like `soil-npk-package`.           |
| **14. Fulfillment Type** | Use defined types (`home`, `lab`, `virtual`) — not free text.                               | `Intent.fulfillment.type`               | UKI currently supports `home` for sample collection.              |
| **15. Payment Terms**    | Acceptable values: `collected_by: bpp`, `type: ON-FULFILLMENT`.                             | `Intent.payment`                        | Matches most agri test service models.                            |
| **16. Tags & Filters**   | Use `tags` for extensions like crop type, urgency, etc.                                     | `Intent.tags`                           | UKI encourages tagging for smart filtering (e.g., `crop: wheat`). |
| **17. Descriptors**      | `descriptor.name` can be used for fuzzy/voice/text queries.                                 | `Intent.descriptor`                     | Optional, useful for UI/UX & NLP-based search.                    |
| **18. Flexible Intent**  | You can send partial intents (e.g., only `category.id` or only `fulfillment.end.location`). | `Intent`                                | UKI BPPs must handle minimal intents.                             |
| **19. Catalog Matching** | Catalog results returned via `on_search` may include exact, related, or recommended items.  | BPP behavior                            | `Item.matched`, `Item.recommended` flags may be set.              |
| **20. Extra Fields**     | Schema-compliant processors ignore unknown fields if not in `additionalProperties: false`.  | All objects                             | Safe to enrich payloads with metadata for internal use.           |


## Developer Notes

-   All API timestamps must follow a common format.

-   During development, leverage the Beckn sandbox environment and mock BPPs to simulate soil test services.
-   Validate payloads against the Beckn schema before sending; inconsistencies in nested structures (`quote`, `fulfillment`, etc.) often go unnoticed without strict validation.
-   Log all incoming and outgoing payloads with headers for debugging asynchronous flows.
-   Pay attention to `error` objects in all `on_*` responses; display user-friendly messages based on `code` and `message` fields.
-   Implement retry mechanisms for non-200 responses where idempotent (e.g. `search`, `status`).
-   Test for edge cases like partial catalog matches, empty `on_search` results, or rejected confirmations.
