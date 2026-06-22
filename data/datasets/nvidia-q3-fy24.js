/* ====================================================================
 * NVIDIA · Q3 FY24 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q3-fy24",
  "name": "NVIDIA · Q3 FY24",
  "meta": {
    "title": "NVIDIA Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "titleSize": 144,
    "titleX": 1451,
    "titleY": 115,
    "titleTextLength": 2422,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q3-fy24.png",
      "width": 2918,
      "height": 1436
    },
    "logoWidth": 317,
    "logoHeight": 227,
    "logoY": 199,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"140\" y=\"0\" width=\"166\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(140,10) scale(6.8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"195\" y=\"279\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"94\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA</text>\n      ",
    "periodX": 2785,
    "periodY": 224,
    "periodNoteY": 279,
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
      "value": 14.5,
      "notes": [
        "+41% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$14.5B"
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
        "+15% Q/Q"
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
      "value": 0.4,
      "notes": [
        "+10% Q/Q"
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
        "+3% Q/Q"
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
        "+11% Q/Q"
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
      "value": 18.1,
      "notes": [
        "+34% Q/Q"
      ],
      "valueText": "$18.1B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 13.4,
      "notes": [
        "74% margin",
        "+4pp Q/Q"
      ],
      "valueText": "$13.4B"
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
      "value": 4.7,
      "valueText": "($4.7B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 10.4,
      "notes": [
        "57% margin",
        "+7pp Q/Q"
      ],
      "valueText": "$10.4B"
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
      "value": 3,
      "valueText": "($3.0B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": "Net profit",
      "value": 9.2,
      "notes": [
        "51% margin",
        "+5pp Q/Q"
      ],
      "valueText": "$9.2B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 1.3,
      "valueText": "($1.3B)"
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
      "value": 2.3,
      "notes": [
        "13% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($2.3B)"
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
        "4% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.7B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 14.5,
      "width": 308
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 2.9,
      "width": 59
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.4,
      "width": 8
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
      "value": 13.5,
      "width": 284
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.7,
      "width": 99
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 10.5,
      "width": 219
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3,
      "width": 63
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.1,
      "targetOrder": 1,
      "curve": {
        "c1x": 2537,
        "c2x": 2531
      },
      "width": 2
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 9.2,
      "targetOrder": 0,
      "width": 196
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.3,
      "width": 26
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.3,
      "width": 48
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.7,
      "width": 14
    }
  ],
  "render": {
    "width": 2918,
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
    "scale": 21.25,
    "nodes": {
      "data_center": {
        "x": 492,
        "y": 364,
        "width": 80,
        "height": 308
      },
      "gaming": {
        "x": 492,
        "y": 829,
        "width": 80,
        "height": 59
      },
      "professional_visualization": {
        "x": 492,
        "y": 1031,
        "width": 81,
        "height": 8
      },
      "automotive": {
        "x": 492,
        "y": 1194,
        "width": 80,
        "height": 6
      },
      "oem_other": {
        "x": 492,
        "y": 1374,
        "width": 80,
        "height": 2
      },
      "revenue": {
        "x": 1017,
        "y": 646,
        "width": 79,
        "height": 386
      },
      "gross_profit": {
        "x": 1532,
        "y": 543,
        "width": 80,
        "height": 284
      },
      "cost_of_revenue": {
        "x": 1529,
        "y": 1029,
        "width": 81,
        "height": 99
      },
      "operating_profit": {
        "x": 2057,
        "y": 458,
        "width": 79,
        "height": 219
      },
      "operating_expenses": {
        "x": 2065,
        "y": 897,
        "width": 80,
        "height": 63
      },
      "net_profit": {
        "x": 2578,
        "y": 361,
        "width": 80,
        "height": 196
      },
      "tax": {
        "x": 2578,
        "y": 755,
        "width": 80,
        "height": 26
      },
      "rnd": {
        "x": 2578,
        "y": 990,
        "width": 80,
        "height": 48
      },
      "sga": {
        "x": 2578,
        "y": 1245,
        "width": 80,
        "height": 14
      },
      "other": {
        "x": 2421,
        "y": 621,
        "width": 80,
        "height": 2
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "parts": [
              "name"
            ],
            "x": 342,
            "top": 489,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 529,
            "top": 255,
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
          "x": 20,
          "y": 421,
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
            "x": 374,
            "top": 829,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 540,
            "top": 722,
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
          "y": 801,
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
            "x": 318,
            "top": 965,
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
            "top": 923,
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
          "y": 945,
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
            "x": 333,
            "top": 1174,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 540,
            "top": 1088,
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
          "y": 1075,
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
            "x": 322,
            "top": 1351,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 539,
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
          "y": 1251,
          "size": 168,
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
            "x": 1054,
            "top": 475,
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
            "x": 1567,
            "top": 331,
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
            "x": 2097,
            "top": 245,
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
            "x": 2684,
            "top": 367,
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
            "x": 1569,
            "top": 1146,
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
            "x": 2103,
            "top": 976,
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
            "x": 2780,
            "top": 971,
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
            "x": 2783,
            "top": 1209,
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
            "x": 2795,
            "top": 733,
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
            "x": 2470,
            "top": 633,
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
