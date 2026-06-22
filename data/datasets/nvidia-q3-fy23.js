/* ====================================================================
 * NVIDIA · Q3 FY23 income statement ($B)
 * Static high-fidelity dataset adapter generated from the prior runtime
 * helper output so this quarter is self-contained.
 * ==================================================================== */
(function () {
  const dataset = {
  "key": "nvidia-q3-fy23",
  "name": "NVIDIA · Q3 FY23",
  "meta": {
    "title": "NVIDIA Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Oct. 2022",
    "titleSize": 143,
    "titleX": 1462,
    "titleY": 117,
    "titleTextLength": 2421,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/nvidia-q3-fy23.png",
      "width": 2890,
      "height": 1396
    },
    "logoWidth": 377,
    "logoHeight": 261,
    "logoY": 203,
    "logoViewBox": "0 0 390 279",
    "logoSvg": "\n        <rect x=\"58\" y=\"0\" width=\"233\" height=\"178\" fill=\"#76b900\"/>\n        <g transform=\"translate(58,10) scale(6.8)\" fill=\"#ffffff\">\n          <path d=\"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z\"/>\n        </g>\n        <text x=\"190\" y=\"242\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"82\" font-weight=\"800\" letter-spacing=\"0\" fill=\"#000000\">NVIDIA</text>\n      ",
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
  },
  "nodes": [
    {
      "id": "data_center",
      "col": 0,
      "order": 0,
      "type": "source",
      "labelSide": "left",
      "label": "Data Center",
      "value": 3.8,
      "notes": [
        "+1% Q/Q"
      ],
      "color": "#0e7451",
      "labelColor": "#0e7451",
      "icons": [
        "server"
      ],
      "iconSize": 32,
      "linkTint": "#88b7a3",
      "valueText": "$3.8B"
    },
    {
      "id": "gaming",
      "col": 0,
      "order": 1,
      "type": "source",
      "labelSide": "left",
      "label": "Gaming",
      "value": 1.6,
      "notes": [
        "(23%) Q/Q"
      ],
      "color": "#a5db57",
      "labelColor": "#66af04",
      "icons": [
        "controller"
      ],
      "iconSize": 32,
      "linkTint": "#add383",
      "valueText": "$1.6B"
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
        "(60%) Q/Q"
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
        "+14% Q/Q"
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
        "(48%) Q/Q"
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
      "value": 5.9,
      "notes": [
        "(12%) Q/Q"
      ],
      "valueText": "$5.9B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Gross profit",
      "value": 3.2,
      "notes": [
        "54% margin",
        "+10pp Q/Q"
      ],
      "valueText": "$3.2B"
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
      "value": 2.8,
      "valueText": "($2.8B)"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "labelSide": "above",
      "label": "Other",
      "value": 0.012,
      "valueText": "$12M"
    },
    {
      "id": "tax_benefit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "labelSide": "above",
      "label": "Tax benefit",
      "value": 0.067,
      "valueText": "$67M"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 2,
      "type": "profit",
      "labelSide": "above",
      "label": "Operating profit",
      "value": 0.6,
      "notes": [
        "10% margin",
        "+3pp Q/Q"
      ],
      "valueText": "$0.6B"
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
      "value": 0.7,
      "notes": [
        "11% margin",
        "+2pp Q/Q"
      ],
      "valueText": "$0.7B"
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
      "value": 3.8
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 1.6
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
      "value": 3.2
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.8
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.7000000000000002
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.012,
      "targetOrder": 1,
      "curve": {
        "c1x": 2513,
        "c2x": 2507
      }
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 0.067,
      "targetOrder": 2,
      "curve": {
        "c1x": 2513,
        "c2x": 2507
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.7000000000000002,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.9
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.6
    }
  ],
  "render": {
    "width": 2890,
    "height": 1396,
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
    "scale": 43.728813559322035,
    "nodes": {
      "data_center": {
        "x": 507,
        "y": 398,
        "width": 79,
        "height": 166.2
      },
      "gaming": {
        "x": 507,
        "y": 726,
        "width": 80,
        "height": 70
      },
      "professional_visualization": {
        "x": 507,
        "y": 969,
        "width": 80,
        "height": 8.7
      },
      "automotive": {
        "x": 507,
        "y": 1156,
        "width": 79,
        "height": 13.1
      },
      "oem_other": {
        "x": 507,
        "y": 1348,
        "width": 79,
        "height": 4.4
      },
      "revenue": {
        "x": 1028,
        "y": 677,
        "width": 78,
        "height": 262.4
      },
      "gross_profit": {
        "x": 1563,
        "y": 560,
        "width": 80,
        "height": 139.9
      },
      "cost_of_revenue": {
        "x": 1566,
        "y": 936,
        "width": 79,
        "height": 122.4
      },
      "operating_profit": {
        "x": 2119,
        "y": 471,
        "width": 79,
        "height": 30.6
      },
      "operating_expenses": {
        "x": 2116,
        "y": 712,
        "width": 79,
        "height": 109.3
      },
      "net_profit": {
        "x": 2561,
        "y": 372,
        "width": 79,
        "height": 34.1
      },
      "tax": {
        "x": -200,
        "y": -200,
        "width": 0,
        "height": 0
      },
      "rnd": {
        "x": 2564,
        "y": 947,
        "width": 79,
        "height": 83.1
      },
      "sga": {
        "x": 2564,
        "y": 1266,
        "width": 79,
        "height": 26.2
      },
      "other": {
        "x": 2170,
        "y": 575,
        "width": 80,
        "height": 1.5
      },
      "tax_benefit": {
        "x": 2366,
        "y": 641,
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
            "x": 351,
            "top": 444,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 545,
            "top": 291,
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
          "x": 34,
          "y": 385,
          "size": 145,
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
            "top": 730,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 550,
            "top": 618,
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
          "x": 17,
          "y": 685,
          "size": 165,
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
            "top": 914,
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
            "top": 859,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "eye"
          ],
          "x": 23,
          "y": 897,
          "size": 165,
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
            "top": 1131,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 537,
            "top": 1044,
            "anchor": "middle",
            "valueSize": 43,
            "noteSize": 31
          }
        ],
        "icons": {
          "names": [
            "car"
          ],
          "x": 16,
          "y": 1047,
          "size": 172,
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
            "x": 336,
            "top": 1321,
            "anchor": "middle",
            "nameSize": 40
          },
          {
            "parts": [
              "value",
              "notes"
            ],
            "x": 549,
            "top": 1240,
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
          "x": 18,
          "y": 1220,
          "size": 151,
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
            "x": 1065,
            "top": 506,
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
            "x": 1596,
            "top": 348,
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
            "x": 2155,
            "top": 260,
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
            "x": 2646,
            "top": 310,
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
            "x": 1597,
            "top": 1065,
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
            "x": 2141,
            "top": 836,
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
            "x": 2758,
            "top": 928,
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
            "x": 2757,
            "top": 1218,
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
            "x": 2195,
            "top": 575,
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
            "x": 2430,
            "top": 648,
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
