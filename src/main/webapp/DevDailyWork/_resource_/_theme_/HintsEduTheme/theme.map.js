(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #1a387a, 0px none"),
						"padding" : nexacro.PaddingObject("0px 2px 0px 15px"),
						"font" : nexacro.FontObject("bold 12px  \"Malgun Gothic\",\"Verdana\""),
						"color" : nexacro.ColorObject("#f4f4f4")
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_close_N.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_close_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_close_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_close_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_close_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_max_N.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_max_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_max_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_max_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_max_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_min_N.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_min_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_min_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_min_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_min_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_normal_N.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_normal_N.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_normal_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_normal_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_normal_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"disabled" :
					{
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_dec_N.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_dec_N.png\")")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_dec_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_dec_D.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_dec_N.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_dec_N.png\")")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_dec_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_dec_D.png\")")
							}
						}
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_inc_N.png\")")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_inc_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_V_inc_D.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_inc_N.png\")")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_inc_N.png\")")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_inc_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/scr_H_inc_D.png\")")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #f0f0f0, 2px solid #f0f0f0, 1px solid #f0f0f0, 2px solid #f0f0f0")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #f0f0f0, 2px solid #f0f0f0, 1px solid #f0f0f0, 2px solid #f0f0f0")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #f9f9f9, 2px solid #f9f9f9, 1px solid #f9f9f9, 2px solid #f9f9f9")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid #f0f0f0, 1px solid #f0f0f0, 2px solid #f0f0f0, 1px solid #f0f0f0")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #f0f0f0, 1px solid #f0f0f0, 2px solid #f0f0f0, 1px solid #f0f0f0")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("2px solid #f9f9f9, 1px solid #f9f9f9, 2px solid #f9f9f9, 1px solid #f9f9f9")
							}
						}
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"disabled" :
					{
					}
				}
			},
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#333333"),
						"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\",\"Verdana\"")
					},
					"contents" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
						"color" : nexacro.ColorObject("#555555"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
					},
					"selected" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("0px 7px 0px 7px"),
						"color" : nexacro.ColorObject("#555555"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
					},
					"pushed" :
					{
						"padding" : nexacro.PaddingObject("2px 7px 0px 7px"),
						"border" : nexacro.BorderObject("1px solid #c0c0c0, 1px solid #7e7e7e, 1px solid #737373, 1px solid #c0c0c0")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cfcfcf, 1px solid #a6a6a6, 1px solid #9e9e9e, 1px solid #cfcfcf"),
						"color" : nexacro.ColorObject("#aaaaaa")
					}
				},
				"class" :
				[
					{
						"btn_Login" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_TF_mnu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc96b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc96b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc96b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc96b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#8bafd9"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_TF_mnu_s" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc26b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc26b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc26b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc26b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#ffc26b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
									"color" : nexacro.ColorObject("#8bafd9"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_TF_logout" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#b8b8b8"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#b8b8b8"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#6c6c6c"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_LF_menu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 1px solid #c5c6c8, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#afb3b9"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_LF_myMenu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 1px solid #c5c6c8, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#afb3b9"),
									"font" : nexacro.FontObject("12px  \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_LF_close" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/LF_close.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_LF_open" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/LF_open.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_MF_home" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_home.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_home.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_home.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_home.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_MF_max" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_max.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_max.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_max.png\")")
								}
							}
						}
					},
					{
						"btn_MF_min" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_min.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_min.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_min.png\")")
								}
							}
						}
					},
					{
						"btn_MF_V" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_v.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_v.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_v.png\")")
								}
							}
						}
					},
					{
						"btn_MF_H" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_h.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_h.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_h.png\")")
								}
							}
						}
					},
					{
						"btn_MF_allX" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_allX.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_allX.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/MF_allX.png\")")
								}
							}
						}
					},
					{
						"btn_WF_boomark" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #dedede, 1px solid #b9b9b9, 1px solid #b2b2b2, 1px solid #dedede"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_N.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #dedede, 1px solid #b9b9b9, 1px solid #b2b2b2, 1px solid #dedede"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_N.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #dcdcdc, 1px solid #c3c3c3, 1px solid #bfbfbf, 1px solid #dcdcdc"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_D.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_WF_boomark_S" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_boomark_O.png\")"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
								}
							}
						}
					},
					{
						"btn_WF_main1" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #145ea0, 1px solid #1461a6, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #145ea0, 1px solid #1461a6, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #134d8e, 1px solid #115095, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #134d8e, 1px solid #115095, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #163b75, 1px solid #163e7a, 0px none"),
									"padding" : nexacro.PaddingObject("4px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #3173ac, 1px solid #1461a6, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#c5d7ec"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_WF_sub1" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #115095, 0px none"),
									"padding" : nexacro.PaddingObject("4px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #509cc9, 1px solid #4b9dcd, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#b0dcf4"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_WF_subGray" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #777777, 1px solid #777777, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#1b202b"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #777777, 1px solid #777777, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#1b202b"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #424651, 1px solid #424651, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #424651, 1px solid #424651, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #424651, 1px solid #424651, 0px none"),
									"padding" : nexacro.PaddingObject("4px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #8d8d8d, 1px solid #8d8d8d, 0px none"),
									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
									"color" : nexacro.ColorObject("#e1e1e1")
								}
							}
						}
					},
					{
						"btn_WF_pop1" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #405475, 1px solid #4b638a, 0px none"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #405475, 1px solid #4b638a, 0px none"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #163b74, 1px solid #153e7a, 0px none"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #163b74, 1px solid #153e7a, 0px none"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #163c75, 1px solid #153e7a, 0px none"),
									"padding" : nexacro.PaddingObject("4px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #5c6d8a, 1px solid #5e718e, 0px none"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#b9c3d4"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_WF_pop2" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c0c0c0, 1px solid #7e7e7e, 1px solid #737373, 1px solid #c0c0c0"),
									"padding" : nexacro.PaddingObject("4px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d1d1d1, 1px solid #ababab, 1px solid #999999, 1px solid #d1d1d1"),
									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
									"color" : nexacro.ColorObject("#a6a6a6"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"btn_WF_search" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #b2b2b2, 1px solid #aeaeae, 0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_search_N.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_search_N.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_search_N.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_search_N.png\")"),
									"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #cccccc, 1px solid #cccccc, 0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/WF_search_D.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_WF_detail" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #5f7086"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #5f7086"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #34465d"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #34465d"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #11233b"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #8a8a8a"),
									"color" : nexacro.ColorObject("#dad9d9")
								}
							}
						}
					},
					{
						"btn_WF_mCalNext" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_P.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_D.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mCalPrev" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")"),
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_P.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_D.png\")")
								}
							}
						}
					},
					{
						"btn_MF_logout" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
								}
							}
						}
					},
					{
						"btn_MF_infoModify" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
								}
							}
						}
					},
					{
						"btn_MF_contents" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#555555"),
									"font" : nexacro.FontObject("bold 13px/normal \"Malgun Gothic\",\"Verdana\""),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_POP_Close" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"color" : nexacro.ColorObject("#333333"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#333333")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					},
					{
						"cal_WF_month" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_D.png\")")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")"),
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_D.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"focused" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P_E.png\")")
										},
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P_E.png\")")
										},
										"pushed" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P_E.png\")")
										}
									}
								}
							}
						]
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
															},
															"focused" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
															},
															"selected" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_P.png\")")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
															},
															"selected" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
															},
															"focused" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")"),
																"padding" : nexacro.PaddingObject("1px 2px 0px 0px")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_D.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_D.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"focused" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O_E.png\")")
										},
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O_E.png\")")
										},
										"pushed" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P_E.png\")")
										}
									}
								}
							}
						]
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px")
															},
															"focused" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_D.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"focused" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O_E.png\")")
										},
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O_E.png\")")
										},
										"pushed" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P_E.png\")")
										}
									}
								}
							}
						]
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px")
															},
															"selected" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")"),
																"padding" : nexacro.PaddingObject("0px")
															},
															"focused" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P.png\")")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_D.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
						"textPadding" : nexacro.PaddingObject("0px 3px 0px 6px")
					},
					"focused" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
					},
					"focused_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
					},
					"mouseover_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
					},
					"disabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")")
					},
					"disabled_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S_E.png\")")
								},
								"focused_selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS_E.png\")")
								},
								"mouseover_selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS_E.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O_E.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O_E.png\")")
								}
							}
						}
					}
				]
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					}
				]
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cccccc")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d5d5d5")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #cccccc")
										},
										"disabled" :
										{
											"border" : nexacro.BorderObject("1px solid #d5d5d5")
										}
									}
								}
							}
						]
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("1px solid #cccccc")
															},
															"disabled" :
															{
																"border" : nexacro.BorderObject("1px solid #d5d5d5")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("3px 4px 3px 4px"),
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
									},
									"focused" :
									{
									},
									"mouseover" :
									{
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								},
								"class" :
								[
									{
										"essential" :
										{
											"self" :
											{
												"enabled" :
												{
													"padding" : nexacro.PaddingObject("3px 4px 3px 4px"),
													"color" : nexacro.ColorObject("#333333"),
													"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
												},
												"focused" :
												{
												},
												"mouseover" :
												{
												},
												"selected" :
												{
													"color" : nexacro.ColorObject("#ffffff")
												}
											}
										}
									}
								]
							},
							"cellcombo" :
							{
								"parent" :
								{
									"cell" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"padding" : nexacro.PaddingObject("3px 4px 3px 4px"),
																		"color" : nexacro.ColorObject("#333333"),
																		"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
																	},
																	"focused" :
																	{
																	},
																	"mouseover" :
																	{
																	},
																	"selected" :
																	{
																		"color" : nexacro.ColorObject("#ffffff")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("3px 4px 3px 4px")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #70c0e7")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #70c0e7")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#228ef3")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Verdana\"")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#f14040")
									},
									"today" :
									{
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#bfbfbf")
									},
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#42556b"),
										"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#228ef3")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#f14040")
									}
								}
							}
						}
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
							}
						}
					}
				}
			},
			"monthspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #2e435b")
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_D.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_D.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_N.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_D.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"focused" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O_E.png\")")
										},
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_O_E.png\")")
										},
										"pushed" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_downbtn_P_E.png\")")
										}
									}
								}
							}
						]
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
												"color" : nexacro.ColorObject("#333333"),
												"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
												"color" : nexacro.ColorObject("#333333"),
												"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 7px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_D.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_D.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_D.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"focused" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O_E.png\")")
										},
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_O_E.png\")")
										},
										"pushed" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P_E.png\")")
										}
									}
								}
							}
						]
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_N.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_O.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_O.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_P.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_next_D.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menunext.png\")"),
								"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menunext_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menunext_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menunext_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 20px 0px 0px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menunext_D.png\")")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 10px 9px 5px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_next_N.png\")")
							},
							"pushed" :
							{
								"padding" : nexacro.PaddingObject("1px 10px 8px 5px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_next_D.png\")")
							}
						},
						"class" :
						[
							{
								"tab_MF_tab" :
								{
									"self" :
									{
										"enabled" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_next_N.png')")
										},
										"mouseover" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_next_O.png')")
										},
										"pushed" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_next_O.png')")
										},
										"disabled" :
										{
											"icon" : nexacro.UrlObject("URL('theme://images/MF_next_D.png')")
										}
									}
								}
							}
						]
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_N.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_O.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_O.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_P.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_prev_D.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menuprev.png\")"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menuprev_O.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menuprev_O.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menuprev_O.png\")"),
								"padding" : nexacro.PaddingObject("1px 0px 0px 20px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Menuprev_D.png\")")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 9px 10px"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prev_N.png\")")
							},
							"pushed" :
							{
								"padding" : nexacro.PaddingObject("1px 5px 8px 10px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prev_D.png\")")
							}
						},
						"class" :
						[
							{
								"tab_MF_tab" :
								{
									"self" :
									{
										"enabled" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_prev_N.png')")
										},
										"mouseover" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_prev_O.png')")
										},
										"pushed" :
										{
											"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
											"icon" : nexacro.UrlObject("URL('theme://images/MF_prev_O.png')")
										},
										"disabled" :
										{
											"icon" : nexacro.UrlObject("URL('theme://images/MF_prev_D.png')")
										}
									}
								}
							}
						]
					}
				}
			},
			"yearspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #2e435b")
									}
								}
							}
						}
					}
				}
			},
			"Div" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				},
				"class" :
				[
					{
						"div_WF_bg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #c7c8cb, 1px solid #c7c8cb, 1px solid #c7c8cb")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #c7c8cb, 1px solid #c7c8cb, 1px solid #c7c8cb")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #c7c8cb, 1px solid #c7c8cb, 1px solid #c7c8cb")
								}
							}
						}
					},
					{
						"div_WF_search" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b3c4db")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #b3c4db")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b3c4db")
								}
							}
						}
					},
					{
						"div_Main_bg1" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								}
							}
						}
					},
					{
						"div_Main_bg2" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								}
							}
						}
					},
					{
						"div_loginBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#999999")
					},
					"readonly" :
					{
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					},
					{
						"edt_Login_id" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#0a7ce1"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#0a7ce1"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"nulltext" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#999999"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"edt_Login_pw" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cccccc"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#0a7ce1"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#0a7ce1"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								},
								"nulltext" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
									"color" : nexacro.ColorObject("#999999"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					}
				]
			},
			"FileDownload" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #b2b2b2, 1px solid #aeaeae, 1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("2px 10px 0px 10px"),
						"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
						"padding" : nexacro.PaddingObject("3px 10px 0px 10px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cfcfcf, 1px solid #a6a6a6, 1px solid #9e9e9e, 1px solid #cfcfcf"),
						"color" : nexacro.ColorObject("#aaaaaa")
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #b2b2b2, 1px solid #aeaeae, 1px solid #cccccc"),
										"padding" : nexacro.PaddingObject("4px 10px 2px 10px"),
										"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4")
									},
									"pushed" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
										"padding" : nexacro.PaddingObject("5px 10px 1px 10px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc"),
										"color" : nexacro.ColorObject("#aaaaaa")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 1px solid #cccccc, 1px solid #cccccc"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 1px solid #cccccc, 1px solid #cccccc"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 1px solid #cccccc, 1px solid #cccccc"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #cccccc, 0px none, 1px solid #cccccc, 1px solid #cccccc"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #d5d5d5, 0px none, 1px solid #d5d5d5, 1px solid #d5d5d5"),
										"color" : nexacro.ColorObject("#aaaaaa")
									}
								}
							}
						}
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #444444, 1px solid #bbbbbb, 1px solid #bbbbbb, 1px solid #bbbbbb")
					}
				},
				"class" :
				[
					{
						"grd_LF_mnutree" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #dddddd"),
												"padding" : nexacro.PaddingObject("3px")
											},
											"focused" :
											{
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											}
										},
										"class" :
										[
											{
												"grd_LF_mnutree" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("1px solid #dddddd"),
															"padding" : nexacro.PaddingObject("3px")
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											}
										]
									}
								}
							},
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #c9cfda"),
												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
											}
										}
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #c5c6c8"),
												"padding" : nexacro.PaddingObject("3px"),
												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
											}
										}
									}
								}
							}
						}
					}
				},
				"class" :
				[
					{
						"lv2" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("1px solid #dddddd"),
															"padding" : nexacro.PaddingObject("3px")
														},
														"focused" :
														{
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lv3" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("1px solid #dddddd"),
															"padding" : nexacro.PaddingObject("3px")
														},
														"focused" :
														{
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lv4" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("1px solid #dddddd"),
															"padding" : nexacro.PaddingObject("3px"),
															"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
														},
														"focused" :
														{
															"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
														},
														"mouseover" :
														{
															"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
														},
														"selected" :
														{
															"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"grd_WF_cell_fixed" :
						{
							"class" :
							[
								{
									"lv4" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"padding" : nexacro.PaddingObject("3px"),
																		"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
																	},
																	"focused" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
																	},
																	"mouseover" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
																	},
																	"selected" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"font" : nexacro.FontObject("bold italic 13px/normal \"Malgun Gothic\",\"Verdana\"")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								},
								{
									"lv3" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"self" :
																{
																	"focused" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"mouseover" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"selected" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"enabled" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"padding" : nexacro.PaddingObject("3px")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								},
								{
									"lv2" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"self" :
																{
																	"focused" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"mouseover" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"selected" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
																	},
																	"enabled" :
																	{
																		"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca"),
																		"padding" : nexacro.PaddingObject("3px")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							],
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			},
			"cellbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #0d85a7"),
														"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
														"color" : nexacro.ColorObject("#ffffff"),
														"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("1px solid #0d85a7"),
														"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
														"color" : nexacro.ColorObject("#ffffff"),
														"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #007399")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #007399")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #065a84"),
														"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #8a8a8a"),
														"color" : nexacro.ColorObject("#dadada")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cccccc"),
														"color" : nexacro.ColorObject("#333333"),
														"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d5d5d5"),
														"color" : nexacro.ColorObject("#999999")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")")
													},
													"focused" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
													},
													"selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
													},
													"focused_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
													},
													"mouseover_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
													},
													"disabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")")
													},
													"disabled_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")")
													}
												}
											}
										}
									},
									"head" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")")
													},
													"focused" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_O.png\")")
													},
													"selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
													},
													"focused_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
													},
													"mouseover_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_OS.png\")")
													},
													"disabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")")
													},
													"disabled_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cccccc")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d5d5d5"),
														"color" : nexacro.ColorObject("#999999")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cccccc"),
														"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d5d5d5"),
														"color" : nexacro.ColorObject("#999999")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_expand_N.png\")")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_expand_N.png\")")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_expand_N.png\")")
													},
													"selected" :
													{
														"border" : nexacro.BorderObject("0px none"),
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_expand_N.png\")")
													},
													"pushed" :
													{
														"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cccccc"),
														"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d5d5d5"),
														"color" : nexacro.ColorObject("#999999")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cccccc"),
														"padding" : nexacro.PaddingObject("7px"),
														"wordWrap" : "char"
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #2f90e5")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d5d5d5"),
														"color" : nexacro.ColorObject("#999999")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"collapse" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_collapse.png\")")
															},
															"expand" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_expand.png\")")
															}
														},
														"class" :
														[
															{
																"grd_LF_mnutree" :
																{
																	"self" :
																	{
																		"expand" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_treeexpand.png\")")
																		},
																		"collapse" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_treecoll.png\")")
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_leaf.png\")")
															}
														},
														"class" :
														[
															{
																"grd_LF_mnutree" :
																{
																	"self" :
																	{
																		"leaf" :
																		{
																			"border" : nexacro.BorderObject("0px none"),
																			"icon" : nexacro.UrlObject("none")
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("0px none")
													}
												},
												"class" :
												[
													{
														"grd_LF_mnutree" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none")
																}
															}
														}
													}
												]
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c5c6c8, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dddddd")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				},
				"class" :
				[
					{
						"img_MF_main" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"img_MF_back" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"img_loginLogo" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("0px 7px 0px 7px")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					},
					{
						"msk_WF_center_essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					},
					{
						"msk_WF_center" :
						{
							"self" :
							{
								"focused" :
								{
								},
								"mouseover" :
								{
								},
								"readonly" :
								{
								},
								"disabled" :
								{
								}
							}
						}
					}
				]
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #124d92, 0px none")
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 30px 0px 30px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Verdana\"")
							},
							"focused" :
							{
								"color" : nexacro.ColorObject("#ffc96b")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffc96b")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffc96b")
							}
						}
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #10335a, 1px solid #10335a, 0px none, 1px solid #10335a")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #10335a, 0px none"),
										"padding" : nexacro.PaddingObject("9px 6px 9px 10px"),
										"color" : nexacro.ColorObject("#9ca9bb"),
										"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#d5dde7")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#d5dde7")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#d5dde7")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("4px 6px 3px 6px")
							},
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
									}
								}
							}
						}
					},
					"PopupMenuItemControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand2.png\")")
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 80px 0px 0px")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 28px 0px 0px")
									}
								}
							}
						}
					},
					"PopupMenuItemControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 28px 0px 0px")
							}
						}
					}
				}
			},
			"PopupDiv" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				},
				"class" :
				[
					{
						"pdv_WF_MonthCalBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #455060")
								}
							}
						}
					}
				]
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
					}
				}
			},
			"PopupMenuItemControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("4px 6px 3px 6px")
					},
					"focused" :
					{
					},
					"mouseover" :
					{
					},
					"selected" :
					{
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#888888")
							}
						}
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_N.png\")"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 0px"),
								"textPadding" : nexacro.PaddingObject("3px 0px 0px 5px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_O.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_S.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_OS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_D.png\")")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_DS.png\")")
							}
						},
						"class" :
						[
							{
								"essential" :
								{
									"self" :
									{
										"mouseover" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_O_E.png\")")
										},
										"selected" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_S_E.png\")")
										},
										"mouseover_selected" :
										{
											"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_OS_E.png\")")
										}
									}
								}
							}
						]
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				},
				"class" :
				[
					{
						"essential" :
						{
							"self" :
							{
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff9126")
								}
							}
						}
					}
				]
			},
			"Static" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#c1c1c1")
					}
				},
				"class" :
				[
					{
						"sta_TF_bg1" :
						{
							"self" :
							{
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"sta_TF_bg2" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #124d92, 0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #124d92, 0px none")
								}
							}
						}
					},
					{
						"sta_TF_text1" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 2px 0px 0px"),
									"color" : nexacro.ColorObject("#fcfa6d"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_TF_text2" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"sta_WF_title" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_title_sub" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 0px 11px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_location" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
									"color" : nexacro.ColorObject("#777777"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\""),
									"letterSpacing" : nexacro.CSSValueObject("-1px")
								}
							}
						}
					},
					{
						"sta_WF_msg_bg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #0a2a70")
								}
							}
						}
					},
					{
						"sta_WF_searchLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 8px 0px 29px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_detailLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5d5d5"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_detailLabel_ess" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5d5d5"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_detailLine" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5d5d5"),
									"padding" : nexacro.PaddingObject("3px")
								}
							}
						}
					},
					{
						"sta_WF_guideRedTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ef5252"),
									"font" : nexacro.FontObject("bold 12px \"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_guideBlueTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#2391ff"),
									"font" : nexacro.FontObject("bold 12px \"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_guideRed" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("red")
								}
							}
						}
					},
					{
						"sta_WF_guideBlue" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("blue")
								}
							}
						}
					},
					{
						"sta_WF_guideTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 16px \"Tahoma\"")
								}
							}
						}
					},
					{
						"sta_WF_guideHor" :
						{
							"self" :
							{
								"enabled" :
								{
									"edge" : nexacro.EdgeImageObject("URL(\"theme://images/WF_guideHor.png\") 3px 0px"),
									"color" : nexacro.ColorObject("red")
								}
							}
						}
					},
					{
						"sta_WF_guideVer" :
						{
							"self" :
							{
								"enabled" :
								{
									"edge" : nexacro.EdgeImageObject("URL(\"theme://images/WF_guideVer.png\") 0px 3px"),
									"color" : nexacro.ColorObject("red")
								}
							}
						}
					},
					{
						"sta_POP_Title" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\""),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"sta_Main_title1" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 12px"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_MF_title" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_MF_contents" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c5c6c8")
								}
							}
						}
					}
				]
			},
			"Tab" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				},
				"class" :
				[
					{
						"tab_MF_tab" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #ffffff, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("8px 12px 5px 12px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #ffffff, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("8px 12px 5px 12px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #ffffff, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("8px 12px 5px 12px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 1px solid #ffffff, 0px none, 0px none"),
								"padding" : nexacro.PaddingObject("8px 12px 5px 12px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
							},
							"selected" :
							{
							},
							"focused_selected" :
							{
								"border" : nexacro.BorderObject("1px solid #0c589e"),
								"padding" : nexacro.PaddingObject("7px 10px 6px 10px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("12px \"\"Malgun Gothic\",\"Verdana\"\"")
							}
						},
						"class" :
						[
							{
								"tab_MF_tab" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #0c589e,1px solid #9c9c9c"),
											"padding" : nexacro.PaddingObject("7px 10px 6px 10px"),
											"color" : nexacro.ColorObject("#222222"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
										},
										"mouseover" :
										{
											"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #0c589e,1px solid #9c9c9c"),
											"padding" : nexacro.PaddingObject("7px 10px 6px 10px"),
											"color" : nexacro.ColorObject("#0c589e"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
										},
										"selected" :
										{
											"border" : nexacro.BorderObject("1px solid #0c589e"),
											"padding" : nexacro.PaddingObject("7px 10px 6px 10px"),
											"color" : nexacro.ColorObject("#222222"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
										},
										"disabled" :
										{
											"border" : nexacro.BorderObject("1px solid #cbcbcb , 1px solid #cbcbcb , 1px solid #0c589e,1px solid #cbcbcb"),
											"padding" : nexacro.PaddingObject("7px 10px 6px 10px"),
											"color" : nexacro.ColorObject("#c1c1c1"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
										}
									}
								}
							}
						]
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_close.png\")")
									}
								},
								"class" :
								[
									{
										"tab_MF_tab" :
										{
											"self" :
											{
												"enabled" :
												{
													"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
													"icon" : nexacro.UrlObject("URL('theme://images/MF_tabextra.png')")
												}
											}
										}
									}
								]
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #3773b7, 0px none, 0px none, 0px none")
							}
						},
						"class" :
						[
							{
								"tab_MF_tab" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #0c589e , 1px solid #9c9c9c , 1px solid #9c9c9c")
										}
									}
								}
							}
						]
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc"),
						"padding" : nexacro.PaddingObject("7px"),
						"wordWrap" : "char"
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2f90e5")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"txt_WF_msg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
									"color" : nexacro.ColorObject("#333333")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
									"color" : nexacro.ColorObject("#333333")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
									"color" : nexacro.ColorObject("#333333")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
									"color" : nexacro.ColorObject("#333333")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
									"color" : nexacro.ColorObject("#333333")
								}
							}
						}
					}
				]
			},
			"body" :
			{
				"parent" :
				{
					"Grid" :
					{
						"class" :
						[
							{
								"grd_LF_mnutree" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("0px none")
										}
									}
								}
							}
						]
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"class" :
								[
									{
										"tab_MF_tab" :
										{
											"self" :
											{
												"enabled" :
												{
													"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
												}
											}
										}
									}
								]
							}
						}
					}
				}
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cccccc")
					}
				}
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/titlebar_close_N.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_close_O.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_max_N.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_max_O.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_min_N.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_min_O.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_normal_N.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_normal_O.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_dec_N.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_dec_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_dec_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_inc_N.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_inc_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_V_inc_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_dec_N.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_dec_P.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_dec_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_inc_N.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_inc_P.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/scr_H_inc_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/cal_dropbtn_N.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_dropbtn_P.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_dropbtn_D.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_N.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_O.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_P.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_D.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_N.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_O.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_P.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_D.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_OS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_dropbtn_N.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_dropbtn_P.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_dropbtn_D.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cal_next_N.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_next_O.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_next_P.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_next_D.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_prev_N.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_prev_O.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_prev_P.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/cal_prev_D.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/grd_expand_N.png")] = { width:18, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/grd_tree_collapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_tree_expand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_tree_leaf.png")] = { width:9, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_OS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/tab_next_N.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/tab_next_D.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/tab_prev_N.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/tab_prev_D.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/tab_close.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/WF_essential.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_O_E.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_P_E.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_O_E.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_P_E.png")] = { width:19, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_S_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_OS_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_btn_O_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_dropbtn_P_E.png")] = { width:9, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_O_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_S_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_OS_E.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/Login_id_N.png")] = { width:30, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/Login_id_S.png")] = { width:30, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/Login_pw_N.png")] = { width:30, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/Login_pw_S.png")] = { width:30, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/TF_MenuLine.png")] = { width:1, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/LF_close.png")] = { width:8, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/LF_open.png")] = { width:8, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_treeexpand.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_treecoll.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/MF_home.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/MF_max.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/MF_min.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/MF_v.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/MF_h.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/MF_allX.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/MF_tabextra.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/MF_prev_N.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/MF_prev_O.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/MF_prev_D.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/MF_next_N.png")] = { width:20, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/MF_next_O.png")] = { width:20, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/MF_next_D.png")] = { width:20, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/WF_boomark_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/WF_boomark_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/WF_boomark_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/WF_search_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/WF_search_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/WF_title.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/WF_title_sub.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/WF_msg_alert.png")] = { width:35, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/WF_msg_confirm.png")] = { width:35, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/WF_searchLabel.png")] = { width:23, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/WF_guideHor.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/WF_guideVer.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/Login_bg.png")] = { width:287, height:400 };
		imgcache[nexacro._getImageLocation("theme://images/img_nexacro_w.png")] = { width:165, height:43 };
		imgcache[nexacro._getImageLocation("theme://images/grid_add.png")] = { width:20, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/grid_edit.png")] = { width:20, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/grid_remove.png")] = { width:20, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/img_emp.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_classroom.png")] = { width:270, height:186 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_guide.png")] = { width:295, height:175 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_main.png")] = { width:513, height:341 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_process.png")] = { width:431, height:191 };
		imgcache[nexacro._getImageLocation("theme://images/RecycleBin_Empty_18.png")] = { width:18, height:18 };
	};
}
)();
