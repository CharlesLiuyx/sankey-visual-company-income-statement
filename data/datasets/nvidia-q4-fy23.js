/* ====================================================================
 * NVIDIA · Q4 FY23 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q4-fy23",
  "name": "NVIDIA · Q4 FY23",
  "meta": {
    "title": "NVIDIA Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "titleSize": 136,
    "titleX": 1465,
    "titleY": 117,
    "titleTextLength": 2425,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q4-fy23.png",
      "width": 2930,
      "height": 1428
    },
    "logoWidth": 324,
    "logoHeight": 232,
    "logoY": 198,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(140,10) scale(6.8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"273\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA</text>\n      ",
    "periodX": 1465,
    "periodY": 1340,
    "periodNoteY": 1378
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 3.6,
      "notes": [
        "(6%) Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$3.6B"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 1.8,
      "notes": [
        "+16% Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383",
      "valueText": "$1.8B"
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
      "value": 0.2,
      "notes": [
        "+13% Q/Q"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#a07fb4",
      "valueText": "$0.2B"
    },
    {
      "id": "automotive",
      "col": 0,
      "order": 3,
      "type": "source",
      "labelSide": "left",
      "label": "Automotive",
      "value": 0.3,
      "notes": [
        "+17% Q/Q"
      ],
      "color": "#095ab8",
      "labelColor": "#095ab8",
      "icons": [
        "car"
      ],
      "iconSize": 32,
      "linkTint": "#82aad7",
      "valueText": "$0.3B"
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
        "+15% Q/Q"
      ],
      "color": "#740046",
      "labelColor": "#740046",
      "icons": [
        "factory"
      ],
      "iconSize": 32,
      "linkTint": "#bc81a0",
      "valueText": "$0.1B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "labelSide": "above",
      "label": "Revenue",
      "value": 6.1,
      "notes": [
        "+2% Q/Q"
      ],
      "valueText": "$6.1B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 3.8,
      "notes": [
        "63% margin",
        "+10pp Q/Q"
      ],
      "valueText": "$3.8B"
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
      "value": 2.2,
      "valueText": "($2.2B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.032,
      "valueText": "$32M"
    },
    {
      "id": "tax_benefit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Tax benefit",
      "value": 0.1,
      "valueText": "$0.1B"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 2,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 1.3,
      "notes": [
        "21% margin",
        "+11pp Q/Q"
      ],
      "valueText": "$1.3B"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 3,
      "type": "cost",
      "labelSide": "below",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 2.6,
      "valueText": "($2.6B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 1.4,
      "notes": [
        "23% margin",
        "+12pp Q/Q"
      ],
      "valueText": "$1.4B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "",
      "value": 0,
      "valueText": ""
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
      "value": 2,
      "valueText": "($2.0B)"
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
      "value": 0.6,
      "valueText": "($0.6B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 3.6,
      "width": 174
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 1.8,
      "width": 88
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.2
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.3
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.8,
      "width": 185
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "width": 107
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.1999999999999997,
      "width": 60
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.6,
      "width": 125
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.032,
      "targetOrder": 1,
      "curve": {
        "c1x": 2547,
        "c2x": 2541
      },
      "width": 3
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 0.1,
      "targetOrder": 2,
      "curve": {
        "c1x": 2547,
        "c2x": 2541
      },
      "width": 5
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1999999999999997,
      "targetOrder": 0,
      "width": 60
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2,
      "width": 94
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.6,
      "width": 30
    }
  ],
  "render": {
    "width": 2930,
    "height": 1428,
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
    "scale": 48.6,
    "nodes": {
      "data_center": {
        "x": 509,
        "y": 381,
        "width": 80,
        "height": 174
      },
      "gaming": {
        "x": 509,
        "y": 719,
        "width": 81,
        "height": 88
      },
      "professional_visualization": {
        "x": 509,
        "y": 986,
        "width": 80,
        "height": 11
      },
      "automotive": {
        "x": 509,
        "y": 1168,
        "width": 80,
        "height": 13
      },
      "oem_other": {
        "x": 509,
        "y": 1377,
        "width": 81,
        "height": 4
      },
      "revenue": {
        "x": 1025,
        "y": 660,
        "width": 80,
        "height": 293
      },
      "gross_profit": {
        "x": 1538,
        "y": 555,
        "width": 80,
        "height": 185
      },
      "cost_of_revenue": {
        "x": 1535,
        "y": 989,
        "width": 80,
        "height": 107
      },
      "operating_profit": {
        "x": 2059,
        "y": 410,
        "width": 80,
        "height": 61
      },
      "operating_expenses": {
        "x": 2062,
        "y": 721,
        "width": 81,
        "height": 125
      },
      "net_profit": {
        "x": 2594,
        "y": 234,
        "width": 81,
        "height": 68
      },
      "tax": {
        "x": -200,
        "y": -200,
        "width": 0,
        "height": 0
      },
      "rnd": {
        "x": 2594,
        "y": 909,
        "width": 81,
        "height": 94
      },
      "sga": {
        "x": 2594,
        "y": 1246,
        "width": 81,
        "height": 30
      },
      "other": {
        "x": 2260,
        "y": 495,
        "width": 80,
        "height": 3
      },
      "tax_benefit": {
        "x": 2406,
        "y": 604,
        "width": 80,
        "height": 5
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 343,
            "top": 461,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 555,
            "top": 273,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 10
          }
        ],
        "icons": {
          "names": [
            "server"
          ],
          "x": 24,
          "y": 382,
          "size": 150,
          "color": "#000000",
          "strokeWidth": 2.5
        }
      },
      "gaming": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 386,
            "top": 746,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 617,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 17
          }
        ],
        "icons": {
          "names": [
            "controller"
          ],
          "x": 6,
          "y": 685,
          "size": 170,
          "color": "#000000",
          "strokeWidth": 2.6
        }
      },
      "professional_visualization": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 320,
            "top": 941,
            "anchor": "middle",
            "nameSize": 40,
            "lineGap": 10
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 554,
            "top": 876,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 13
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 20,
          "y": 904,
          "size": 170,
          "color": "#000000",
          "strokeWidth": 2.6
        }
      },
      "automotive": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 336,
            "top": 1154,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 543,
            "top": 1064,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "car"
          ],
          "x": 0,
          "y": 1056,
          "size": 178,
          "color": "#000000",
          "strokeWidth": 2.6
        }
      },
      "oem_other": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 338,
            "top": 1358,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 533,
            "top": 1263,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 17
          }
        ],
        "icons": {
          "names": [
            "factory"
          ],
          "x": 21,
          "y": 1265,
          "size": 156,
          "color": "#000000",
          "strokeWidth": 2.6
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
            "x": 1064,
            "top": 492,
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
            "x": 1577,
            "top": 342,
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
            "x": 2093,
            "top": 197,
            "anchor": "middle",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31
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
            "x": 2698,
            "top": 258,
            "anchor": "start",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 16
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
            "x": 1580,
            "top": 1117,
            "anchor": "middle",
            "nameSize": 38,
            "valueSize": 37,
            "lineGap": 18
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
            "x": 2098,
            "top": 873,
            "anchor": "middle",
            "nameSize": 38,
            "valueSize": 37,
            "lineGap": 18
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
            "x": 2800,
            "top": 921,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "noteSize": 31,
            "lineGap": 13
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
            "x": 2804,
            "top": 1223,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "noteSize": 31,
            "lineGap": 13
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
            "x": 2317,
            "top": 512,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "parts": [
              "name",
              "value"
            ],
            "x": 2434,
            "top": 634,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "lineGap": 15
          }
        ]
      }
    }
  }
};

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
