/* ====================================================================
 * NVIDIA · Q3 FY25 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q3-fy25",
  "name": "NVIDIA · Q3 FY25",
  "meta": {
    "title": "NVIDIA Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "periodX": 2840,
    "periodY": 232,
    "periodNoteY": 287,
    "titleSize": 142,
    "titleX": 1478,
    "titleY": 117,
    "titleTextLength": 2471,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q3-fy25.png",
      "width": 2976,
      "height": 1486
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 173,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(47,17) scale(10.4,8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"281\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA<tspan font-size=\"38\" baseline-shift=\"super\">&#174;</tspan></text>\n      "
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 30.8,
      "notes": [
        "+17% Q/Q"
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
      "value": 3.3,
      "notes": [
        "+14% Q/Q"
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
        "+7% Q/Q"
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
      "value": 0.4,
      "notes": [
        "+30% Q/Q"
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
        "+10% Q/Q"
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
      "value": 35.1,
      "notes": [
        "+17% Q/Q"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 26.2,
      "notes": [
        "75% margin",
        "(1pp) Q/Q"
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
      "value": 8.9,
      "valueText": "($8.9B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.4
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 21.9,
      "notes": [
        "62% margin",
        "+0pp Q/Q"
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
      "value": 4.3,
      "valueText": "($4.3B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 19.3,
      "notes": [
        "55% margin",
        "(0pp) Q/Q"
      ],
      "valueText": "$19.3B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 3,
      "valueText": "($3.0B)"
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
      "value": 3.4,
      "notes": [
        "10% of revenue",
        "(1pp) Q/Q"
      ],
      "valueText": "($3.4B)"
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
      "value": 0.9,
      "notes": [
        "3% of revenue",
        "(0pp) Q/Q"
      ],
      "valueText": "($0.9B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 30.8
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 3.3
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.5
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.4
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 26.200000000000003
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 8.9
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 21.900000000000002
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.3
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.4,
      "targetOrder": 1,
      "y0": 652.5,
      "y1": 590,
      "width": 5,
      "curve": {
        "c1x": 2604,
        "c2x": 2594
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 18.900000000000002,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 3
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.4
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.9
    }
  ],
  "render": {
    "width": 2976,
    "height": 1486,
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
    "scale": 12,
    "nodes": {
      "data_center": {
        "x": 496,
        "y": 420,
        "width": 82,
        "height": 370
      },
      "gaming": {
        "x": 496,
        "y": 932,
        "width": 82,
        "height": 40
      },
      "professional_visualization": {
        "x": 496,
        "y": 1102,
        "width": 82,
        "height": 6
      },
      "automotive": {
        "x": 496,
        "y": 1252,
        "width": 82,
        "height": 5
      },
      "oem_other": {
        "x": 496,
        "y": 1400,
        "width": 82,
        "height": 1.5
      },
      "revenue": {
        "x": 1021,
        "y": 665,
        "width": 82,
        "height": 421
      },
      "gross_profit": {
        "x": 1557,
        "y": 568,
        "width": 82,
        "height": 314
      },
      "cost_of_revenue": {
        "x": 1557,
        "y": 1107,
        "width": 82,
        "height": 107
      },
      "operating_profit": {
        "x": 2100,
        "y": 466,
        "width": 82,
        "height": 263
      },
      "operating_expenses": {
        "x": 2100,
        "y": 953,
        "width": 82,
        "height": 52
      },
      "other": {
        "x": 2498,
        "y": 650,
        "width": 82,
        "height": 5
      },
      "net_profit": {
        "x": 2626,
        "y": 362,
        "width": 82,
        "height": 232
      },
      "tax": {
        "x": 2626,
        "y": 832,
        "width": 82,
        "height": 36
      },
      "rnd": {
        "x": 2626,
        "y": 1080,
        "width": 82,
        "height": 41
      },
      "sga": {
        "x": 2626,
        "y": 1334,
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
            "x": 337,
            "top": 579,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
            "top": 311,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "server"
          ],
          "x": 14,
          "y": 496,
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
            "x": 379,
            "top": 922,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
            "top": 834,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "controller"
          ],
          "x": 0,
          "y": 886,
          "size": 170,
          "color": "#000000",
          "strokeWidth": 2.7
        }
      },
      "professional_visualization": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 320,
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
            "x": 537,
            "top": 999,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 0,
          "y": 1035,
          "size": 170,
          "color": "#000000",
          "strokeWidth": 2.7
        }
      },
      "automotive": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 337,
            "top": 1227,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
            "top": 1149,
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
          "y": 1169,
          "size": 178,
          "color": "#000000",
          "strokeWidth": 2.7
        }
      },
      "oem_other": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 322,
            "top": 1362,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
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
          "x": 0,
          "y": 1297,
          "size": 156,
          "color": "#000000",
          "strokeWidth": 2.7
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
            "x": 1062,
            "top": 499,
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
            "x": 1598,
            "top": 349,
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
            "top": 251,
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
            "x": 2522,
            "top": 675,
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
            "x": 2736,
            "top": 382,
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
            "x": 1598,
            "top": 1232,
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
            "top": 1028,
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
            "x": 2800,
            "top": 812,
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
            "x": 2842,
            "top": 1026,
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
            "x": 2842,
            "top": 1284,
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
