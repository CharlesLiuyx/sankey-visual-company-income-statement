/* ====================================================================
 * NVIDIA · Q2 FY25 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q2-fy25",
  "name": "NVIDIA · Q2 FY25",
  "meta": {
    "title": "NVIDIA Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "titleSize": 145,
    "titleX": 1485,
    "titleY": 115,
    "titleTextLength": 2460,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q2-fy25.png",
      "width": 2970,
      "height": 1482
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 167,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <g transform=\"translate(28,-43) scale(11.25)\" fill=\"#76b900\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"191\" y=\"281\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA<tspan font-size=\"38\" baseline-shift=\"super\">&#174;</tspan></text>\n      ",
    "periodX": 2838,
    "periodY": 227,
    "periodNoteY": 282,
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
      "value": 26.3,
      "notes": [
        "+16% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$26.3B"
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
        "+9% Q/Q"
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
        "+6% Q/Q"
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
        "+5% Q/Q"
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
        "+13% Q/Q"
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
      "value": 30,
      "notes": [
        "+15% Q/Q"
      ],
      "valueText": "$30.0B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 22.6,
      "notes": [
        "75% margin",
        "(3pp) Q/Q"
      ],
      "valueText": "$22.6B"
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
      "value": 7.5,
      "valueText": "($7.5B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.6,
      "valueText": "$0.6B"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 18.6,
      "notes": [
        "62% margin",
        "(3pp) Q/Q"
      ],
      "valueText": "$18.6B"
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
      "value": 3.9,
      "valueText": "($3.9B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 16.6,
      "notes": [
        "55% margin",
        "(2pp) Q/Q"
      ],
      "valueText": "$16.6B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 2.6,
      "valueText": "($2.6B)"
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
      "value": 3.1,
      "notes": [
        "10% of revenue",
        "(0pp) Q/Q"
      ],
      "valueText": "($3.1B)"
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
      "value": 26.3,
      "width": 366
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.9,
      "width": 38
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.5,
      "width": 5
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 0.3,
      "width": 4
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
      "value": 22.6,
      "width": 314
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 7.5,
      "width": 103
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 18.700000000000003,
      "width": 260
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.9000000000000004,
      "width": 53,
      "y1": 957.5
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.6,
      "targetOrder": 1,
      "curve": {
        "c1x": 2605,
        "c2x": 2594
      },
      "width": 8,
      "y0": 651,
      "y1": 575
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 16.1,
      "targetOrder": 0,
      "width": 231,
      "sourceOrder": 0,
      "y1": 463.5
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 2.6,
      "width": 35,
      "sourceOrder": 1,
      "y0": 696
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.1,
      "width": 41
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.8,
      "width": 10
    }
  ],
  "render": {
    "width": 2970,
    "height": 1482,
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
    "scale": 13.9,
    "nodes": {
      "data_center": {
        "x": 506,
        "y": 422,
        "width": 82,
        "height": 366
      },
      "gaming": {
        "x": 506,
        "y": 928,
        "width": 82,
        "height": 38
      },
      "professional_visualization": {
        "x": 506,
        "y": 1110,
        "width": 82,
        "height": 5
      },
      "automotive": {
        "x": 506,
        "y": 1261,
        "width": 82,
        "height": 4
      },
      "oem_other": {
        "x": 506,
        "y": 1429,
        "width": 82,
        "height": 2
      },
      "revenue": {
        "x": 1038,
        "y": 660,
        "width": 82,
        "height": 418
      },
      "gross_profit": {
        "x": 1565,
        "y": 549,
        "width": 82,
        "height": 314
      },
      "cost_of_revenue": {
        "x": 1567,
        "y": 1102,
        "width": 82,
        "height": 103
      },
      "operating_profit": {
        "x": 2103,
        "y": 454,
        "width": 82,
        "height": 260
      },
      "operating_expenses": {
        "x": 2100,
        "y": 931,
        "width": 82,
        "height": 53
      },
      "net_profit": {
        "x": 2635,
        "y": 348,
        "width": 82,
        "height": 231
      },
      "tax": {
        "x": 2635,
        "y": 816,
        "width": 82,
        "height": 35
      },
      "rnd": {
        "x": 2635,
        "y": 1062,
        "width": 82,
        "height": 41
      },
      "sga": {
        "x": 2635,
        "y": 1330,
        "width": 82,
        "height": 10
      },
      "other": {
        "x": 2492,
        "y": 647,
        "width": 80,
        "height": 8
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 344,
            "top": 560,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 545,
            "top": 306,
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
            "x": 387,
            "top": 922,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 817,
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
          "y": 881,
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
            "x": 322,
            "top": 1035,
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
            "top": 1001,
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
          "y": 1020,
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
            "x": 342,
            "top": 1231,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 1148,
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
          "y": 1168,
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
            "x": 323,
            "top": 1388,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 552,
            "top": 1306,
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
          "y": 1320,
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
            "x": 1597,
            "top": 332,
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
            "x": 2131,
            "top": 238,
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
            "x": 2740,
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
            "x": 1601,
            "top": 1218,
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
            "x": 2134,
            "top": 994,
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
            "x": 2718,
            "top": 1012,
            "anchor": "start",
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
            "x": 2718,
            "top": 1245,
            "anchor": "start",
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
            "top": 793,
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
            "top": 674,
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
