---
outline: deep
---

# REST endpoint department


::: info
Endpoint: [https://novalink.oswaldohuillca.workers.dev/api/v1/peru/ubigeo/{code}](https://novalink.oswaldohuillca.workers.dev/api/v1/peru/ubigeo/01)
:::

Returns

```json
{
   "ubigeo_id": "2625",
    "ubigeo_name": "Ancash",
    "ubigeo_code": "02",
    "ubigeo_tag": "Ancash, Perú",
    "ubigeo_search": "ancash perú",
    "ubigeo_children_number": "20",
    "ubigeo_level": "1",
    "ubigeo_parent_id": "2533",
    "provinces": [
      {
        "ubigeo_id": "2639",
        "ubigeo_name": "Aija",
        "ubigeo_code": "02",
        "ubigeo_tag": "Aija, Ancash",
        "ubigeo_search": "aija ancash",
        "ubigeo_children_number": "5",
        "ubigeo_level": "2",
        "ubigeo_parent_id": "2625",
        "districts": [
          "..."
        ]
      }
    ]
}
```