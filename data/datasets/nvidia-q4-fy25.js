/* ====================================================================
 * NVIDIA · Q4 FY25 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q4-fy25",
  "name": "NVIDIA · Q4 FY25",
  "meta": {
    "title": "NVIDIA Q4 FY25 Income Statement",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "periodX": 2851,
    "periodY": 232,
    "periodNoteY": 287,
    "titleSize": 142,
    "titleX": 1492,
    "titleY": 117,
    "titleTextLength": 2471,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q4-fy25.png",
      "width": 2986,
      "height": 1490
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 167,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#66af04\"/>\n        <g transform=\"translate(151,25) scale(6.2)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"281\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA<tspan font-size=\"38\" baseline-shift=\"super\">&#174;</tspan></text>\n      "
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 35.6,
      "notes": [
        "+16% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 34,
      "linkTint": "#88b7a3"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 2.5,
      "notes": [
        "(22%) Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383"
    },
    {
      "id": "professional_visualization",
      "col": 0,
      "order": 2,
      "type": "source",
      "labelSide": "left",
      "label": [
        "Professional",
        "Visualization"
      ],
      "value": 0.5,
      "notes": [
        "+5% Q/Q"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#a07fb4"
    },
    {
      "id": "automotive",
      "col": 0,
      "order": 3,
      "type": "source",
      "labelSide": "left",
      "label": "Automotive",
      "value": 0.6,
      "notes": [
        "+27% Q/Q"
      ],
      "color": "#095ab8",
      "labelColor": "#095ab8",
      "icons": [
        "car"
      ],
      "iconSize": 32,
      "linkTint": "#82aad7"
    },
    {
      "id": "oem_other",
      "col": 0,
      "order": 4,
      "type": "source",
      "labelSide": "left",
      "label": "OEM & Other",
      "value": 0.1,
      "notes": [
        "+30% Q/Q"
      ],
      "color": "#740046",
      "labelColor": "#740046",
      "icons": [
        "factory"
      ],
      "iconSize": 32,
      "linkTint": "#bc81a0"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "labelSide": "above",
      "label": "Revenue",
      "value": 39.3,
      "notes": [
        "+12% Q/Q"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 28.7,
      "notes": [
        "73% margin",
        "(2pp) Q/Q"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "labelSide": "below",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 10.6,
      "valueText": "($10.6B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 1.1
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 24,
      "notes": [
        "61% margin",
        "(1pp) Q/Q"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "labelSide": "below",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.7,
      "valueText": "($4.7B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 22.1,
      "notes": [
        "56% margin",
        "+1pp Q/Q"
      ],
      "valueText": "$22.1B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 3.1,
      "valueText": "($3.1B)"
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 2,
      "type": "cost",
      "labelSide": "right",
      "label": [
        "Research &",
        "Development"
      ],
      "value": 3.7,
      "notes": [
        "9% of revenue",
        "(0pp) Q/Q"
      ],
      "valueText": "($3.7B)"
    },
    {
      "id": "sga",
      "col": 4,
      "order": 3,
      "type": "cost",
      "labelSide": "right",
      "label": [
        "Sales, General",
        "& Admin"
      ],
      "value": 1,
      "notes": [
        "2% of revenue",
        "(0pp) Q/Q"
      ],
      "valueText": "($1.0B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 35.6
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.5
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.5
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.6
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 28.700000000000003
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 10.6
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 24.000000000000004
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.7
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 1.1,
      "targetOrder": 1,
      "y0": 652,
      "y1": 592,
      "curve": {
        "c1x": 2596,
        "c2x": 2590
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 20.900000000000002,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 3.1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.7
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1
    }
  ],
  "render": {
    "width": 2986,
    "height": 1490,
    "background": "#efefef",
    "titleColor": "#123e65",
    "subtitleColor": "#535353",
    "noteColor": "#535353",
    "palette": {
      "source": {
        "node": "#0e7451",
        "label": "#0e7451"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#289321",
        "label": "#128040"
      },
      "cost": {
        "node": "#be0004",
        "label": "#800003"
      }
    },
    "linkTint": {
      "source": "#88b7a3",
      "hub": null,
      "profit": "#93c68b",
      "cost": "#de8577"
    },
    "linkOpacity": 1
  },
  "layout": {
    "scale": 10.78,
    "nodes": {
      "data_center": {
        "x": 502,
        "y": 412,
        "width": 82,
        "height": 384
      },
      "gaming": {
        "x": 502,
        "y": 936,
        "width": 82,
        "height": 27
      },
      "professional_visualization": {
        "x": 502,
        "y": 1100,
        "width": 82,
        "height": 5
      },
      "automotive": {
        "x": 502,
        "y": 1246,
        "width": 82,
        "height": 6
      },
      "oem_other": {
        "x": 502,
        "y": 1397,
        "width": 82,
        "height": 1.5
      },
      "revenue": {
        "x": 1035,
        "y": 644,
        "width": 81,
        "height": 424
      },
      "gross_profit": {
        "x": 1567,
        "y": 536,
        "width": 82,
        "height": 309
      },
      "cost_of_revenue": {
        "x": 1567,
        "y": 1079,
        "width": 82,
        "height": 114
      },
      "operating_profit": {
        "x": 2100,
        "y": 446,
        "width": 81,
        "height": 259
      },
      "operating_expenses": {
        "x": 2100,
        "y": 936,
        "width": 81,
        "height": 51
      },
      "other": {
        "x": 2485,
        "y": 646,
        "width": 82,
        "height": 12
      },
      "net_profit": {
        "x": 2632,
        "y": 356,
        "width": 82,
        "height": 238
      },
      "tax": {
        "x": 2632,
        "y": 815,
        "width": 82,
        "height": 33
      },
      "rnd": {
        "x": 2632,
        "y": 1058,
        "width": 82,
        "height": 40
      },
      "sga": {
        "x": 2632,
        "y": 1308,
        "width": 82,
        "height": 11
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 363,
            "top": 579,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 309,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "server"
          ],
          "x": 52,
          "y": 524,
          "size": 96,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "gaming": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 359,
            "top": 922,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 836,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "controller"
          ],
          "x": 50,
          "y": 915,
          "size": 108,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "professional_visualization": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 352,
            "top": 1015,
            "anchor": "middle",
            "nameSize": 40,
            "lineGap": 10
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 996,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 49,
          "y": 1074,
          "size": 110,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "automotive": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 357,
            "top": 1227,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 1143,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "car"
          ],
          "x": 51,
          "y": 1204,
          "size": 108,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "oem_other": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 352,
            "top": 1362,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 1286,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "factory"
          ],
          "x": 54,
          "y": 1325,
          "size": 102,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "revenue": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 1076,
            "top": 472,
            "anchor": "middle",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 1608,
            "top": 329,
            "anchor": "middle",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 2141,
            "top": 239,
            "anchor": "middle",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "parts": [
              "name",
              "value"
            ],
            "x": 2526,
            "top": 672,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 2745,
            "top": 378,
            "anchor": "start",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "parts": [
              "name",
              "value"
            ],
            "x": 1608,
            "top": 1218,
            "anchor": "middle",
            "nameSize": 38,
            "valueSize": 37
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "parts": [
              "name",
              "value"
            ],
            "x": 2141,
            "top": 1008,
            "anchor": "middle",
            "nameSize": 38,
            "valueSize": 37
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "parts": [
              "name",
              "value"
            ],
            "x": 2808,
            "top": 796,
            "anchor": "start",
            "nameSize": 35,
            "valueSize": 34
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 2846,
            "top": 1017,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "noteSize": 31
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "x": 2846,
            "top": 1270,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "noteSize": 31
          }
        ]
      }
    }
  }
};

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
