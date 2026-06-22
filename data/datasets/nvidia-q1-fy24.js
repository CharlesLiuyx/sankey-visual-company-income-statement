/* ====================================================================
 * NVIDIA · Q1 FY24 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q1-fy24",
  "name": "NVIDIA · Q1 FY24",
  "meta": {
    "title": "NVIDIA Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "titleSize": 142,
    "titleX": 1455,
    "titleY": 110,
    "titleTextLength": 2420,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q1-fy24.png",
      "width": 2920,
      "height": 1418
    },
    "logoWidth": 317,
    "logoHeight": 227,
    "logoY": 196,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(140,10) scale(6.8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"279\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA</text>\n      ",
    "periodX": 1460,
    "periodY": 1330,
    "periodNoteY": 1369
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 4.3,
      "notes": [
        "+18% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$4.3B"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 2.2,
      "notes": [
        "+22% Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383",
      "valueText": "$2.2B"
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
      "value": 0.3,
      "notes": [
        "+31% Q/Q"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#a07fb4",
      "valueText": "$0.3B"
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
        "+1% Q/Q"
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
        "(8%) Q/Q"
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
      "value": 7.2,
      "notes": [
        "+19% Q/Q"
      ],
      "valueText": "$7.2B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 4.6,
      "notes": [
        "65% margin",
        "+1pp Q/Q"
      ],
      "valueText": "$4.6B"
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
      "value": 2.5,
      "valueText": "($2.5B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.069,
      "valueText": "$69M"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 2.1,
      "notes": [
        "30% margin",
        "+9pp Q/Q"
      ],
      "valueText": "$2.1B"
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
      "value": 2.5,
      "valueText": "($2.5B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 2,
      "notes": [
        "28% margin",
        "+5pp Q/Q"
      ],
      "valueText": "$2.0B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2B)"
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
      "value": 1.9,
      "valueText": "($1.9B)"
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
      "value": 4.3,
      "width": 201
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.2,
      "width": 105
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.3,
      "width": 12
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.3,
      "width": 13
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.1,
      "width": 4
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.699999999999999,
      "width": 219
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.5,
      "width": 120
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.1999999999999993,
      "width": 100
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5,
      "width": 118
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.069,
      "targetOrder": 1,
      "curve": {
        "c1x": 2539,
        "c2x": 2533
      },
      "width": 3
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.9999999999999993,
      "targetOrder": 0,
      "width": 93
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "width": 7
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.9,
      "width": 88
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.6,
      "width": 29
    }
  ],
  "render": {
    "width": 2920,
    "height": 1418,
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
    "scale": 46.9,
    "nodes": {
      "data_center": {
        "x": 495,
        "y": 387,
        "width": 80,
        "height": 201
      },
      "gaming": {
        "x": 495,
        "y": 742,
        "width": 81,
        "height": 105
      },
      "professional_visualization": {
        "x": 495,
        "y": 1001,
        "width": 80,
        "height": 12
      },
      "automotive": {
        "x": 495,
        "y": 1185,
        "width": 80,
        "height": 13
      },
      "oem_other": {
        "x": 495,
        "y": 1371,
        "width": 80,
        "height": 4
      },
      "revenue": {
        "x": 1017,
        "y": 655,
        "width": 78,
        "height": 338
      },
      "gross_profit": {
        "x": 1529,
        "y": 555,
        "width": 80,
        "height": 219
      },
      "cost_of_revenue": {
        "x": 1537,
        "y": 988,
        "width": 81,
        "height": 120
      },
      "operating_profit": {
        "x": 2042,
        "y": 449,
        "width": 80,
        "height": 100
      },
      "operating_expenses": {
        "x": 2045,
        "y": 748,
        "width": 80,
        "height": 118
      },
      "net_profit": {
        "x": 2580,
        "y": 314,
        "width": 81,
        "height": 95
      },
      "tax": {
        "x": 2580,
        "y": 718,
        "width": 81,
        "height": 7
      },
      "rnd": {
        "x": 2580,
        "y": 900,
        "width": 81,
        "height": 88
      },
      "sga": {
        "x": 2580,
        "y": 1171,
        "width": 81,
        "height": 29
      },
      "other": {
        "x": 2424,
        "y": 514,
        "width": 81,
        "height": 3
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 345,
            "top": 464,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 535,
            "top": 278,
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
          "y": 397,
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
            "x": 382,
            "top": 766,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 535,
            "top": 643,
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
          "x": 4,
          "y": 728,
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
            "top": 930,
            "anchor": "middle",
            "nameSize": 40,
            "lineGap": 10
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 535,
            "top": 893,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 17,
          "y": 932,
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
            "x": 337,
            "top": 1163,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 535,
            "top": 1085,
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
          "y": 1086,
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
            "x": 331,
            "top": 1345,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 535,
            "top": 1262,
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
          "x": 8,
          "y": 1262,
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
            "x": 1056,
            "top": 493,
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
            "x": 1569,
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
            "x": 2073,
            "top": 238,
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
            "x": 2695,
            "top": 330,
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
            "x": 1577,
            "top": 1125,
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
            "x": 2085,
            "top": 894,
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
            "x": 2799,
            "top": 920,
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
            "x": 2786,
            "top": 1138,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "noteSize": 31,
            "lineGap": 13
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
            "x": 2746,
            "top": 668,
            "anchor": "start",
            "nameSize": 35,
            "valueSize": 34
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
            "x": 2460,
            "top": 526,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34
          }
        ]
      }
    }
  }
};

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
