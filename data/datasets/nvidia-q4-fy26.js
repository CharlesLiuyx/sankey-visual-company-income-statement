/* ====================================================================
 * NVIDIA · Q4 FY26 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q4-fy26",
  "name": "NVIDIA · Q4 FY26",
  "meta": {
    "title": "NVIDIA Q4 FY26 Income Statement",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "titleSize": 142,
    "titleY": 127,
    "titleTextLength": 2472,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q4-fy26.png",
      "width": 3004,
      "height": 1496
    },
    "logoWidth": 390,
    "logoHeight": 279,
    "logoY": 171,
    "logoViewBox": "0 0 190 104",
    "logoSvg": "\n      <rect x=\"63\" y=\"0\" width=\"64\" height=\"58\" rx=\"7\" fill=\"#76b900\"/>\n      <g transform=\"translate(72,6) scale(1.92)\" fill=\"#ffffff\">\n        <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n      </g>\n      <text x=\"95\" y=\"94\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"27\" font-weight=\"800\" letter-spacing=\"-0.5\" fill=\"#1d1d1d\">NVIDIA<tspan font-size=\"11\" baseline-shift=\"super\">&#174;</tspan></text>\n    "
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 62.3,
      "notes": [
        "+75% Y/Y"
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
      "value": 3.7,
      "notes": [
        "+47% Y/Y"
      ],
      "color": "#76c900",
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
      "value": 1.3,
      "notes": [
        "+159% Y/Y"
      ],
      "color": "#5b1787",
      "labelColor": "#5b1787",
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
        "+6% Y/Y"
      ],
      "color": "#0072c6",
      "labelColor": "#0072c6",
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
        "+28% Y/Y"
      ],
      "color": "#8f145c",
      "labelColor": "#8f145c",
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
      "value": 68.1,
      "notes": [
        "+73% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 51.1,
      "notes": [
        "75% margin",
        "+2pp Y/Y"
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
      "value": 17,
      "valueText": "($17.0B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 6.1
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
      "value": 44.3,
      "notes": [
        "65% margin",
        "+4pp Y/Y"
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
      "value": 6.8
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
      "value": 43,
      "notes": [
        "63% margin",
        "+7pp Y/Y"
      ],
      "valueText": "$43.0B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "labelSide": "right",
      "label": "Tax",
      "value": 7.4
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
      "value": 5.5,
      "notes": [
        "8% of revenue",
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
      "value": 1.3,
      "notes": [
        "2% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "data_center",
      "target": "revenue",
      "value": 62.3
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 3.7
    },
    {
      "source": "professional_visualization",
      "target": "revenue",
      "value": 1.3
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
      "value": 51.099999999999994
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 17
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 44.3
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.8
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 6.1,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 36.9,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 7.4
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 5.5
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.3
    }
  ],
  "render": {
    "width": 3004,
    "height": 1496,
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
    "scale": 6.696,
    "nodes": {
      "data_center": {
        "x": 513,
        "y": 406,
        "width": 81,
        "height": 417
      },
      "gaming": {
        "x": 513,
        "y": 970,
        "width": 81,
        "height": 25
      },
      "professional_visualization": {
        "x": 513,
        "y": 1135,
        "width": 81,
        "height": 9
      },
      "automotive": {
        "x": 513,
        "y": 1281,
        "width": 81,
        "height": 4
      },
      "oem_other": {
        "x": 513,
        "y": 1422,
        "width": 81,
        "height": 1.5
      },
      "revenue": {
        "x": 1046,
        "y": 651,
        "width": 80,
        "height": 456
      },
      "gross_profit": {
        "x": 1578,
        "y": 547,
        "width": 81,
        "height": 340
      },
      "cost_of_revenue": {
        "x": 1578,
        "y": 1138,
        "width": 81,
        "height": 111
      },
      "operating_profit": {
        "x": 2111,
        "y": 451,
        "width": 80,
        "height": 297
      },
      "operating_expenses": {
        "x": 2111,
        "y": 994,
        "width": 80,
        "height": 43
      },
      "other": {
        "x": 2496,
        "y": 659,
        "width": 80,
        "height": 39
      },
      "net_profit": {
        "x": 2643,
        "y": 354,
        "width": 81,
        "height": 288
      },
      "tax": {
        "x": 2643,
        "y": 887,
        "width": 81,
        "height": 47
      },
      "rnd": {
        "x": 2643,
        "y": 1138,
        "width": 81,
        "height": 36
      },
      "sga": {
        "x": 2643,
        "y": 1379,
        "width": 81,
        "height": 7
      }
    },
    "labels": {
      "data_center": {
        "blocks": [
          {
            "x": 358,
            "top": 585,
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
            "x": 553,
            "top": 290,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$62.3B",
                "size": 43,
                "weight": 400,
                "color": "#0e7451"
              },
              {
                "text": "+75% Y/Y",
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
          "x": 53,
          "y": 556,
          "size": 96,
          "color": "#000000",
          "strokeWidth": 2.15
        }
      },
      "gaming": {
        "blocks": [
          {
            "x": 360,
            "top": 930,
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
            "x": 553,
            "top": 856,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$3.7B",
                "size": 43,
                "weight": 400,
                "color": "#a5db57"
              },
              {
                "text": "+47% Y/Y",
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
            "x": 355,
            "top": 1055,
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
            "x": 553,
            "top": 1023,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$1.3B",
                "size": 43,
                "weight": 400,
                "color": "#49006f"
              },
              {
                "text": "+159% Y/Y",
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
            "x": 355,
            "top": 1243,
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
            "x": 553,
            "top": 1165,
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
                "text": "+6% Y/Y",
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
            "top": 1379,
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
            "x": 553,
            "top": 1305,
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
                "text": "+28% Y/Y",
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
            "x": 1086,
            "top": 477,
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
                "text": "$68.1B",
                "size": 43,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+73% Y/Y",
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
            "x": 1618,
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
                "text": "$51.1B",
                "size": 43,
                "weight": 400,
                "color": "#128040"
              },
              {
                "text": "75% margin",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 2151,
            "top": 232,
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
                "text": "$44.3B",
                "size": 43,
                "weight": 400,
                "color": "#128040"
              },
              {
                "text": "65% margin",
                "size": 31,
                "weight": 400,
                "color": "#535353"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 2536,
            "top": 720,
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
                "text": "$6.1B",
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
            "x": 2752,
            "top": 396,
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
                "text": "$43.0B",
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
                "text": "+7pp Y/Y",
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
            "x": 1618,
            "top": 1273,
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
                "text": "($17.0B)",
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
            "x": 2151,
            "top": 1046,
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
                "text": "($6.8B)",
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
            "x": 2820,
            "top": 871,
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
                "text": "($7.4B)",
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
            "x": 2872,
            "top": 1040,
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
                "text": "($5.5B)",
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
            "x": 2872,
            "top": 1258,
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
                "text": "($1.3B)",
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
