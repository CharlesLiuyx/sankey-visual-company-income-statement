/* ====================================================================
 * NVIDIA · Q2 FY26 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q2-fy26",
  "name": "NVIDIA · Q2 FY26",
  "meta": {
    "title": "NVIDIA Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "periodX": 2860,
    "periodY": 210,
    "periodNoteY": 264,
    "titleSize": 146,
    "titleY": 114,
    "titleTextLength": 2461,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q2-fy26.png",
      "width": 3002,
      "height": 1484
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 157,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(151,25) scale(6.2)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"281\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#1d1d1d\">NVIDIA<tspan font-size=\"38\" baseline-shift=\"super\">&#174;</tspan></text>\n      "
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 41.1,
      "notes": [
        "+56% Y/Y"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 34,
      "linkTint": "#98bfae"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 4.3,
      "notes": [
        "+49% Y/Y"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#bde586"
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
      "value": 0.6,
      "notes": [
        "+32% Y/Y"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#b99bd1"
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
        "+69% Y/Y"
      ],
      "color": "#095ab8",
      "labelColor": "#095ab8",
      "icons": [
        "car"
      ],
      "iconSize": 32,
      "linkTint": "#96c4e9"
    },
    {
      "id": "oem_other",
      "col": 0,
      "order": 4,
      "type": "source",
      "labelSide": "left",
      "label": "OEM & Other",
      "value": 0.2,
      "notes": [
        "+97% Y/Y"
      ],
      "color": "#740046",
      "labelColor": "#740046",
      "icons": [
        "factory"
      ],
      "iconSize": 32,
      "linkTint": "#cf91b4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "labelSide": "above",
      "label": "Revenue",
      "value": 46.7,
      "notes": [
        "+56% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 33.9,
      "notes": [
        "72% margin",
        "(3pp) Y/Y"
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
      "value": 12.9,
      "valueText": "($12.9B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 2.8
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 28.4,
      "notes": [
        "61% margin",
        "(1pp) Y/Y"
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
      "value": 5.4,
      "valueText": "($5.4B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 26.4,
      "notes": [
        "57% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$26.4B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 4.8
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
      "value": 4.3,
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ]
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
      "value": 1.1,
      "notes": [
        "2% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 41.1
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 4.3
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.6
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.6
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 33.900000000000006
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 12.9
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 28.500000000000007
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.4
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 2.8,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 23.700000000000006,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 4.8
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 4.3
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.1
    }
  ],
  "render": {
    "width": 3002,
    "height": 1484,
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
    "scale": 9.08,
    "nodes": {
      "data_center": {
        "x": 519,
        "y": 410,
        "width": 81,
        "height": 375
      },
      "gaming": {
        "x": 519,
        "y": 930,
        "width": 81,
        "height": 40
      },
      "professional_visualization": {
        "x": 519,
        "y": 1104,
        "width": 81,
        "height": 7
      },
      "automotive": {
        "x": 519,
        "y": 1253,
        "width": 81,
        "height": 7
      },
      "oem_other": {
        "x": 519,
        "y": 1394,
        "width": 81,
        "height": 2
      },
      "revenue": {
        "x": 1051,
        "y": 633,
        "width": 81,
        "height": 426
      },
      "gross_profit": {
        "x": 1584,
        "y": 531,
        "width": 81,
        "height": 307
      },
      "cost_of_revenue": {
        "x": 1583,
        "y": 1090,
        "width": 82,
        "height": 116
      },
      "operating_profit": {
        "x": 2116,
        "y": 419,
        "width": 81,
        "height": 257
      },
      "operating_expenses": {
        "x": 2116,
        "y": 915,
        "width": 82,
        "height": 48
      },
      "other": {
        "x": 2513,
        "y": 589,
        "width": 81,
        "height": 23
      },
      "net_profit": {
        "x": 2648,
        "y": 300,
        "width": 82,
        "height": 239
      },
      "tax": {
        "x": 2648,
        "y": 800,
        "width": 82,
        "height": 42
      },
      "rnd": {
        "x": 2648,
        "y": 1051,
        "width": 82,
        "height": 37
      },
      "sga": {
        "x": 2648,
        "y": 1335,
        "width": 82,
        "height": 9
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
            "x": 560,
            "top": 297,
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
            "x": 560,
            "top": 819,
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
            "x": 560,
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
            "x": 560,
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
            "x": 560,
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
            "x": 1092,
            "top": 462,
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
            "x": 1624,
            "top": 313,
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
            "x": 2157,
            "top": 203,
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
            "x": 2555,
            "top": 630,
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
            "x": 2758,
            "top": 308,
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
            "x": 1624,
            "top": 1217,
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
            "x": 2165,
            "top": 979,
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
            "x": 2845,
            "top": 777,
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
            "x": 2872,
            "top": 995,
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
            "x": 2872,
            "top": 1253,
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
