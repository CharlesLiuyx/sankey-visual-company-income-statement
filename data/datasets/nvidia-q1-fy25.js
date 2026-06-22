/* ====================================================================
 * NVIDIA · Q1 FY25 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q1-fy25",
  "name": "NVIDIA · Q1 FY25",
  "meta": {
    "title": "NVIDIA Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "titleSize": 145,
    "titleX": 1494,
    "titleY": 115,
    "titleTextLength": 2460,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q1-fy25.png",
      "width": 2988,
      "height": 1462
    },
    "logoWidth": 370,
    "logoHeight": 225,
    "logoY": 195,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(151,25) scale(6.2)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"281\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA<tspan font-size=\"38\" baseline-shift=\"super\">&#174;</tspan></text>\n      ",
    "periodX": 2838,
    "periodY": 215,
    "periodNoteY": 270,
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
      "value": 22.6,
      "notes": [
        "+23% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$22.6B"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 2.6,
      "notes": [
        "(8%) Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383",
      "valueText": "$2.6B"
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
      "value": 0.4,
      "notes": [
        "(8%) Q/Q"
      ],
      "color": "#49006f",
      "labelColor": "#49006f",
      "icons": [
        "eye"
      ],
      "iconSize": 32,
      "linkTint": "#a07fb4",
      "valueText": "$0.4B"
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
        "(13%) Q/Q"
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
      "value": 26,
      "notes": [
        "+18% Q/Q"
      ],
      "valueText": "$26.0B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 20.4,
      "notes": [
        "78% margin",
        "+2pp Q/Q"
      ],
      "valueText": "$20.4B"
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
      "value": 5.6,
      "valueText": "($5.6B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.4,
      "valueText": "$0.4B"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 16.9,
      "notes": [
        "65% margin",
        "+3pp Q/Q"
      ],
      "valueText": "$16.9B"
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
      "value": 3.5,
      "valueText": "($3.5B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 14.9,
      "notes": [
        "57% margin",
        "+2pp Q/Q"
      ],
      "valueText": "$14.9B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 2.4,
      "valueText": "($2.4B)"
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
      "value": 2.7,
      "notes": [
        "10% of revenue",
        "(1pp) Q/Q"
      ],
      "valueText": "($2.7B)"
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
      "value": 0.8,
      "notes": [
        "3% of revenue",
        "(0pp) Q/Q"
      ],
      "valueText": "($0.8B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 22.6,
      "width": 341
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.6,
      "width": 37
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.4,
      "width": 6
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
      "value": 20.400000000000006,
      "width": 308
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.6,
      "width": 84
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 16.900000000000006,
      "width": 254
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.5,
      "width": 50,
      "y1": 919
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.4,
      "targetOrder": 1,
      "curve": {
        "c1x": 2605,
        "c2x": 2594
      },
      "width": 3,
      "y0": 644,
      "y1": 576
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 14.500000000000005,
      "targetOrder": 0,
      "width": 224,
      "y1": 465
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 2.4,
      "width": 34
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.7,
      "width": 39
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.8,
      "width": 10
    }
  ],
  "render": {
    "width": 2988,
    "height": 1462,
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
    "scale": 15.25,
    "nodes": {
      "data_center": {
        "x": 506,
        "y": 391,
        "width": 82,
        "height": 341
      },
      "gaming": {
        "x": 506,
        "y": 883,
        "width": 82,
        "height": 37
      },
      "professional_visualization": {
        "x": 506,
        "y": 1058,
        "width": 82,
        "height": 6
      },
      "automotive": {
        "x": 506,
        "y": 1215,
        "width": 82,
        "height": 6
      },
      "oem_other": {
        "x": 506,
        "y": 1376,
        "width": 82,
        "height": 2
      },
      "revenue": {
        "x": 1040,
        "y": 654,
        "width": 80,
        "height": 392
      },
      "gross_profit": {
        "x": 1568,
        "y": 551,
        "width": 82,
        "height": 308
      },
      "cost_of_revenue": {
        "x": 1568,
        "y": 1080,
        "width": 82,
        "height": 84
      },
      "operating_profit": {
        "x": 2104,
        "y": 454,
        "width": 81,
        "height": 254
      },
      "operating_expenses": {
        "x": 2102,
        "y": 894,
        "width": 80,
        "height": 50
      },
      "net_profit": {
        "x": 2636,
        "y": 353,
        "width": 82,
        "height": 224
      },
      "tax": {
        "x": 2636,
        "y": 789,
        "width": 82,
        "height": 34
      },
      "rnd": {
        "x": 2636,
        "y": 1017,
        "width": 82,
        "height": 39
      },
      "sga": {
        "x": 2636,
        "y": 1269,
        "width": 82,
        "height": 10
      },
      "other": {
        "x": 2492,
        "y": 642,
        "width": 80,
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
            "x": 357,
            "top": 532,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 288,
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
          "x": 16,
          "y": 500,
          "size": 170,
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
            "x": 378,
            "top": 881,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 775,
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
          "x": 0,
          "y": 808,
          "size": 182,
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
            "x": 327,
            "top": 988,
            "anchor": "middle",
            "nameSize": 40,
            "lineGap": 10
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 540,
            "top": 955,
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
          "x": 10,
          "y": 982,
          "size": 166,
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
            "x": 356,
            "top": 1201,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
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
          "y": 1110,
          "size": 182,
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
            "x": 342,
            "top": 1353,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 1274,
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
          "y": 1285,
          "size": 158,
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
            "x": 1080,
            "top": 492,
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
            "x": 1609,
            "top": 343,
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
            "x": 2145,
            "top": 244,
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
            "x": 2745,
            "top": 360,
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
            "x": 1609,
            "top": 1180,
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
            "x": 2143,
            "top": 963,
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
            "x": 2863,
            "top": 983,
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
            "x": 2862,
            "top": 1229,
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
            "x": 2858,
            "top": 756,
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
            "x": 2533,
            "top": 657,
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
