/* ====================================================================
 * NVIDIA · Q4 FY24 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q4-fy24",
  "name": "NVIDIA · Q4 FY24",
  "meta": {
    "title": "NVIDIA Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "titleSize": 144,
    "titleX": 1463,
    "titleY": 119,
    "titleTextLength": 2418,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q4-fy24.png",
      "width": 2924,
      "height": 1436
    },
    "logoWidth": 370,
    "logoHeight": 227,
    "logoY": 199,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(140,10) scale(6.8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"279\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA</text>\n      ",
    "periodX": 2793,
    "periodY": 228,
    "periodNoteY": 284,
    "titleWeight": 700
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 18.4,
      "notes": [
        "+27% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$18.4B"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 2.9,
      "notes": [
        "+0% Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383",
      "valueText": "$2.9B"
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
        "+11% Q/Q"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#a07fb4",
      "valueText": "$0.5B"
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
        "+8% Q/Q"
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
        "+23% Q/Q"
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
      "value": 22.1,
      "notes": [
        "+22% Q/Q"
      ],
      "valueText": "$22.1B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 16.8,
      "notes": [
        "76% margin",
        "+2pp Q/Q"
      ],
      "valueText": "$16.8B"
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
      "value": 5.3,
      "valueText": "($5.3B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.5,
      "valueText": "$0.5B"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 13.6,
      "notes": [
        "62% margin",
        "+4pp Q/Q"
      ],
      "valueText": "$13.6B"
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
      "value": 3.2,
      "valueText": "($3.2B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 12.3,
      "notes": [
        "56% margin",
        "+5pp Q/Q"
      ],
      "valueText": "$12.3B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 1.8,
      "valueText": "($1.8B)"
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
      "value": 2.5,
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($2.5B)"
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
      "value": 0.7,
      "notes": [
        "3% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.7B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 18.4,
      "width": 333
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.9,
      "width": 50
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.5,
      "width": 7
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.3,
      "width": 6
    },
    {
      "source": "oem_other",
      "target": "revenue",
      "value": 0.1,
      "width": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 16.9,
      "width": 305
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.3,
      "width": 96
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 13.7,
      "width": 246
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.2,
      "width": 57,
      "y1": 915.5
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.5,
      "targetOrder": 1,
      "curve": {
        "c1x": 2575,
        "c2x": 2586
      },
      "width": 7,
      "y0": 654.5,
      "y1": 602.5
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 11.899999999999999,
      "targetOrder": 0,
      "width": 222,
      "sourceOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.8,
      "width": 32,
      "sourceOrder": 1,
      "y0": 705.5
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.5,
      "width": 44
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.7,
      "width": 12
    }
  ],
  "render": {
    "width": 2924,
    "height": 1436,
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
    "scale": 18.15,
    "nodes": {
      "data_center": {
        "x": 500,
        "y": 391,
        "width": 80,
        "height": 333
      },
      "gaming": {
        "x": 500,
        "y": 863,
        "width": 80,
        "height": 50
      },
      "professional_visualization": {
        "x": 500,
        "y": 1054,
        "width": 80,
        "height": 7
      },
      "automotive": {
        "x": 500,
        "y": 1221,
        "width": 80,
        "height": 6
      },
      "oem_other": {
        "x": 500,
        "y": 1385,
        "width": 80,
        "height": 2
      },
      "revenue": {
        "x": 1019,
        "y": 643,
        "width": 79,
        "height": 402
      },
      "gross_profit": {
        "x": 1549,
        "y": 558,
        "width": 80,
        "height": 305
      },
      "cost_of_revenue": {
        "x": 1548,
        "y": 1043,
        "width": 81,
        "height": 96
      },
      "operating_profit": {
        "x": 2065,
        "y": 476,
        "width": 79,
        "height": 246
      },
      "operating_expenses": {
        "x": 2062,
        "y": 887,
        "width": 80,
        "height": 57
      },
      "net_profit": {
        "x": 2586,
        "y": 381,
        "width": 80,
        "height": 222
      },
      "tax": {
        "x": 2586,
        "y": 791,
        "width": 80,
        "height": 32
      },
      "rnd": {
        "x": 2586,
        "y": 994,
        "width": 80,
        "height": 44
      },
      "sga": {
        "x": 2586,
        "y": 1306,
        "width": 80,
        "height": 12
      },
      "other": {
        "x": 2435,
        "y": 651,
        "width": 80,
        "height": 7
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 371,
            "top": 489,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
            "top": 284,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 13
          }
        ],
        "icons": {
          "names": [
            "server"
          ],
          "x": 22,
          "y": 455,
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
            "top": 859,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 541,
            "top": 754,
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
          "x": 5,
          "y": 806,
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
            "x": 338,
            "top": 990,
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
            "top": 946,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 12
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 12,
          "y": 975,
          "size": 160,
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
            "x": 339,
            "top": 1191,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 542,
            "top": 1117,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 12
          }
        ],
        "icons": {
          "names": [
            "car"
          ],
          "x": 0,
          "y": 1093,
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
            "x": 314,
            "top": 1340,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 541,
            "top": 1276,
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
          "y": 1275,
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
            "x": 1058,
            "top": 493,
            "anchor": "middle",
            "nameSize": 40,
            "valueSize": 43,
            "noteSize": 31,
            "lineGap": 12
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
            "x": 1591,
            "top": 350,
            "anchor": "middle",
            "nameSize": 41,
            "valueSize": 44,
            "noteSize": 32,
            "lineGap": 12
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
            "x": 2105,
            "top": 264,
            "anchor": "middle",
            "nameSize": 41,
            "valueSize": 44,
            "noteSize": 32,
            "lineGap": 12
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
            "x": 2692,
            "top": 377,
            "anchor": "start",
            "nameSize": 41,
            "valueSize": 44,
            "noteSize": 32,
            "lineGap": 12
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
            "x": 1587,
            "top": 1156,
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
            "x": 2105,
            "top": 965,
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
            "x": 2803,
            "top": 975,
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
            "x": 2779,
            "top": 1213,
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
            "x": 2726,
            "top": 755,
            "anchor": "middle",
            "nameSize": 35,
            "valueSize": 34,
            "lineGap": 12
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
            "x": 2484,
            "top": 668,
            "anchor": "middle",
            "nameSize": 34,
            "valueSize": 34,
            "lineGap": 12
          }
        ]
      }
    }
  }
};

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
