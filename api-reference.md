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

-   **Response Body Schema:**

    -   `message`: `{ Ack }`
    -   `error`: `Error`

## Developer Notes

-   All API timestamps must follow a common format.

-   During development, leverage the Beckn sandbox environment and mock BPPs to simulate soil test services.
-   Validate payloads against the Beckn schema before sending; inconsistencies in nested structures (`quote`, `fulfillment`, etc.) often go unnoticed without strict validation.
-   Log all incoming and outgoing payloads with headers for debugging asynchronous flows.
-   Pay attention to `error` objects in all `on_*` responses; display user-friendly messages based on `code` and `message` fields.
-   Implement retry mechanisms for non-200 responses where idempotent (e.g. `search`, `status`).
-   Test for edge cases like partial catalog matches, empty `on_search` results, or rejected confirmations.
