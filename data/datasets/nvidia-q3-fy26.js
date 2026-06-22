/* ====================================================================
 * NVIDIA · Q3 FY26 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q3-fy26",
  "name": "NVIDIA · Q3 FY26",
  "meta": {
    "title": "NVIDIA Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct 2025",
    "periodX": 2860,
    "periodY": 210,
    "periodNoteY": 264,
    "titleSize": 142,
    "titleY": 118,
    "titleTextLength": 2461,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q3-fy26.png",
      "width": 2996,
      "height": 1488
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 163,
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
      "value": 51.2,
      "notes": [
        "+66% Y/Y"
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
        "+30% Y/Y"
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
      "value": 0.8,
      "notes": [
        "+56% Y/Y"
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
        "+32% Y/Y"
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
        "+79% Y/Y"
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
      "value": 57,
      "notes": [
        "+62% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 41.8,
      "notes": [
        "73% margin",
        "(1pp) Y/Y"
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
      "value": 15.2,
      "valueText": "($15.2B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 1.9
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 36,
      "notes": [
        "63% margin",
        "+1pp Y/Y"
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
      "value": 5.8,
      "valueText": "($5.8B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "labelSide": "right",
      "label": [
        "Net",
        "profit"
      ],
      "value": 31.9,
      "notes": [
        "56% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$31.9B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 6,
      "valueText": "($6.0B)"
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
      "value": 4.7,
      "notes": [
        "8% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($4.7B)"
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
        "(1pp) Y/Y"
      ],
      "valueText": "($1.1B)"
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 51.2
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 4.3
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 0.8
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
      "value": 41.8
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 15.2
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 36
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.8
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 1.9,
      "targetOrder": 1,
      "width": 11,
      "y0": 600.5,
      "y1": 576.5,
      "curve": {
        "c1x": 2618,
        "c2x": 2606
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 30,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 6
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 4.7
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.1
    }
  ],
  "render": {
    "width": 2996,
    "height": 1488,
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
    "scale": 7.735,
    "nodes": {
      "data_center": {
        "x": 511,
        "y": 411,
        "width": 81,
        "height": 396
      },
      "gaming": {
        "x": 511,
        "y": 948,
        "width": 81,
        "height": 30
      },
      "professional_visualization": {
        "x": 511,
        "y": 1116,
        "width": 81,
        "height": 5
      },
      "automotive": {
        "x": 511,
        "y": 1260,
        "width": 81,
        "height": 2
      },
      "oem_other": {
        "x": 511,
        "y": 1401,
        "width": 81,
        "height": 1.5
      },
      "revenue": {
        "x": 1044,
        "y": 646,
        "width": 80,
        "height": 441
      },
      "gross_profit": {
        "x": 1575,
        "y": 543,
        "width": 82,
        "height": 324
      },
      "cost_of_revenue": {
        "x": 1575,
        "y": 1083,
        "width": 82,
        "height": 116
      },
      "operating_profit": {
        "x": 2108,
        "y": 448,
        "width": 81,
        "height": 278
      },
      "operating_expenses": {
        "x": 2108,
        "y": 940,
        "width": 81,
        "height": 44
      },
      "other": {
        "x": 2505,
        "y": 595,
        "width": 80,
        "height": 11
      },
      "net_profit": {
        "x": 2640,
        "y": 339,
        "width": 82,
        "height": 246
      },
      "tax": {
        "x": 2640,
        "y": 781,
        "width": 82,
        "height": 46
      },
      "rnd": {
        "x": 2640,
        "y": 1058,
        "width": 82,
        "height": 34
      },
      "sga": {
        "x": 2640,
        "y": 1342,
        "width": 82,
        "height": 7
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "x": 363,
            "top": 571,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Data Center",
                "size": 40,
                "weight": 700,
                "color": "#0e7451"
              }
            ]
          },
          {
            "x": 552,
            "top": 305,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$51.2B",
                "size": 43,
                "weight": 400,
                "color": "#0e7451"
              },
              {
                "text": "+66% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
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
            "x": 359,
            "top": 931,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gaming",
                "size": 40,
                "weight": 700,
                "color": "#66af04"
              }
            ]
          },
          {
            "x": 552,
            "top": 842,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$4.3B",
                "size": 43,
                "weight": 400,
                "color": "#a5db57"
              },
              {
                "text": "+30% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
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
            "x": 352,
            "top": 1047,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Professional",
                "size": 40,
                "weight": 700,
                "color": "#49006f"
              },
              {
                "text": "Visualization",
                "size": 40,
                "weight": 700,
                "color": "#49006f"
              }
            ]
          },
          {
            "x": 552,
            "top": 1006,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$0.8B",
                "size": 43,
                "weight": 400,
                "color": "#49006f"
              },
              {
                "text": "+56% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
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
            "x": 357,
            "top": 1228,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Automotive",
                "size": 40,
                "weight": 700,
                "color": "#095ab8"
              }
            ]
          },
          {
            "x": 552,
            "top": 1157,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$0.6B",
                "size": 43,
                "weight": 400,
                "color": "#095ab8"
              },
              {
                "text": "+32% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
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
            "x": 352,
            "top": 1375,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "OEM & Other",
                "size": 40,
                "weight": 700,
                "color": "#740046"
              }
            ]
          },
          {
            "x": 552,
            "top": 1301,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$0.2B",
                "size": 43,
                "weight": 400,
                "color": "#740046"
              },
              {
                "text": "+79% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
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
            "x": 1084,
            "top": 480,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$57.0B",
                "size": 43,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+62% Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1616,
            "top": 330,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 700,
                "color": "#128040"
              },
              {
                "text": "$41.8B",
                "size": 43,
                "weight": 400,
                "color": "#128040"
              },
              {
                "text": "73% margin",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 2148,
            "top": 237,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 700,
                "color": "#128040"
              },
              {
                "text": "$36.0B",
                "size": 43,
                "weight": 400,
                "color": "#128040"
              },
              {
                "text": "63% margin",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "+1pp Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2538,
            "top": 622,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 34,
                "weight": 700,
                "color": "#128040"
              },
              {
                "text": "$1.9B",
                "size": 34,
                "weight": 400,
                "color": "#128040"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2750,
            "top": 365,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 700,
                "color": "#128040"
              },
              {
                "text": "$31.9B",
                "size": 43,
                "weight": 400,
                "color": "#128040"
              },
              {
                "text": "56% margin",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "+1pp Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1616,
            "top": 1218,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "($15.2B)",
                "size": 37,
                "weight": 400,
                "color": "#800003"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2148,
            "top": 1003,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "($5.8B)",
                "size": 37,
                "weight": 400,
                "color": "#800003"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2816,
            "top": 770,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 35,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "($6.0B)",
                "size": 34,
                "weight": 400,
                "color": "#800003"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2870,
            "top": 1007,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Research &",
                "size": 34,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "Development",
                "size": 34,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "($4.7B)",
                "size": 34,
                "weight": 400,
                "color": "#800003"
              },
              {
                "text": "8% of revenue",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2870,
            "top": 1260,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Sales, General",
                "size": 34,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "& Admin",
                "size": 34,
                "weight": 700,
                "color": "#800003"
              },
              {
                "text": "($1.1B)",
                "size": 34,
                "weight": 400,
                "color": "#800003"
              },
              {
                "text": "2% of revenue",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              }
            ]
          }
        ]
      }
    }
  }
};

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
