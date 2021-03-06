//XJS=GridFilter_backup.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  @FileName 	GridFilter.xjs
        */

        var pForm = nexacro.Form.prototype;

        /*
        Grid Filter

          ============================= 포함기능 =============================

         1. 그리드 헤드 마우스 오버 필터 기능
        	- 하나의 컬럼에 대해 여러 필터 조건을 지정할 수 있다.
        	- 필터가 적용된 조건이 그리드에 바로 표시되지 않는다.

         2. 그리드 헤드 영역 추가 필터 기능
        	- 여러 컬럼에 적용된 필터 조건이 그리드에 표현된다.
        	- 하나의 컬럼에 대해 하나의 필터 조건만 가능하다. (콤보형 제외)

         ============================= 확인사항 =============================

         - 두가지 기능을 하나의 그리드에 동시에 지정하는 것은 고려되지 않았습니다.

         - format 이 변경되거나 데이터가 갱신되는 경우 아래 함수를 호출해야 함.
            removeOverFilterComps (마우스 오버 필터) or removeAppendFilterComps (영역 추가 필터)

         - column size 변경 시 아래 함수를 호출해야 함.
        	arrangeOverFilterComps(마우스 오버 필터) or arrangeAppendFilterComps (영역 추가 필터)

        */

        /******************************************************************************
        	1. 예제 실행을 위한 function
        ******************************************************************************/

        this.GridFilter_onload = function(obj, e)
        {
        	// 그리드 헤드 마우스오버 필터기능 사용을 위한 초기화
        	//	this.initGridHeadOverFilter(this.grd_sample);

        	// 그리드 헤드 영역 추가 필터기능 사용을 위한 초기화
        	//	this.initGridHeadAppendFilter(this.grd_sample2);
        }

        this.gfn_gridFilter = function(objGrid)
        {
        	// 그리드 헤드 마우스오버 필터기능 사용을 위한 초기화
        	this.initGridHeadOverFilter(objGrid);
        }

        this.gfn_gridFilter_2 = function(objGrid)
        {

        // 	Eco.Logger.startElapsed();
        //
        // 	var show = Eco.XComp.getUserProperty(obj, "showFilter");
        //
        // 	if ( show )
        // 	{
        // 		this.hideHeadAppendFilter(this.grd_sample2);
        // 	}
        // 	else
        // 	{
        // 		this.showHeadAppendFilter(this.grd_sample2);
        // 	}
        //
        // 	show = show ? false : true;
        //
        // 	var text = show ? "필터제거" : "필터사용";
        // 	obj.set_text(text);
        //
        // 	Eco.XComp.setUserProperty(obj, "showFilter", show);
        //
        // 	Eco.Logger.debug({message:"end", elapsed: true});
        //

        	Eco.Logger.startElapsed();

        	// 그리드 헤드 영역 추가 필터기능 사용을 위한 초기화
        	this.initGridHeadAppendFilter(objGrid);

        	// 버튼클릭 이벤트 실행
        	this.showHeadAppendFilter(objGrid);
        	//	this.hideHeadAppendFilter(objGrid);

        	Eco.Logger.debug({message:"end", elapsed: true});

        // 	var index = Eco.XComp.getUserProperty(objGrid, "appendHeadRowIndex");
        // 	if ( Eco.isUndefined(index) )
        // 	{
        // 		index = objGrid.appendContentsRow("head");
        //
        // 		// 추가된 head row index를 담아두어 제거시 사용
        // 		Eco.XComp.setUserProperty(objGrid, "appendHeadRowIndex", index);
        //
        // 		this.arrangeAppendFilterComps(objGrid);
        // 	}
        }

        this.gfn_gridUnFilter = function(objGrid)
        {
        	//	Grid head over filter 기능에 추가된 컴포넌트 제거
        	this.removeOverFilterComps(objGrid);

        	// 	add onmousemove handler - 마우스 이동 시 필터 가능 이미지 표시
        	objGrid.removeEventHandler("onmousemove", this.filterGridOnMouseMoveHandler, this);

        	//	이걸로 되는지 정확히 디버깅은 아직 못했음.
        	//	"대상이 이미 초기화 되었는지 확인"에서 걸리지 않도록 강제로 셋팅함.
        	Eco.XComp.setUserProperty(objGrid, "initGridHeadOverFilter", false);

        	//	add onhscroll handler - 가로 스크롤 발생 시 컴포넌트 재배치
        	//	objGrid.removeEventHandler("onhscroll", this.arrangeOverFilterComps, this);


        }

        this.btn_filter_onclick = function(obj,  e)
        {
        	Eco.Logger.startElapsed();

        	var show = Eco.XComp.getUserProperty(obj, "showFilter");

        	if ( show )
        	{
        		this.hideHeadAppendFilter(this.grd_sample2);
        	}
        	else
        	{
        		this.showHeadAppendFilter(this.grd_sample2);
        	}

        	show = show ? false : true;

        	var text = show ? "필터제거" : "필터사용";
        	obj.set_text(text);

        	Eco.XComp.setUserProperty(obj, "showFilter", show);

        	Eco.Logger.debug({message:"end", elapsed: true});
        }

        /******************************************************************************
        	2. 그리드 마우스 오버 시 필터 기능 관련 function
        ******************************************************************************/

        /**
         * Grid mouseover 시 filter 버튼 보이기 초기화
         * @param {Grid} grid 대상 Grid Component
         */
        this.initGridHeadOverFilter = function(grid)
        {

        	// 대상이 이미 초기화 되었는지 확인
        	if ( Eco.XComp.getUserProperty(grid, "initGridHeadOverFilter") )
        	{
        		return;
        	}

        	// 필터 적용 표시를 위해 추가한 컴포넌트 name 목록 속성 추가
        	Eco.XComp.setUserProperty(grid, "overFilterCompNameList", []);

        	// 필터 정보를 담아둘 속성 추가
        	Eco.XComp.setUserProperty(grid, "filterInfos", {});

        	// add onmousemove handler - 마우스 이동 시 필터 가능 이미지 표시
        	grid.addEventHandler("onmousemove", this.filterGridOnMouseMoveHandler, this);

        	// add onhscroll handler - 가로 스크롤 발생 시 컴포넌트 재배치
        	grid.addEventHandler("onhscroll", this.arrangeOverFilterComps, this);

        	// 사용자에 의해 셀이 이동된 경우 필터 관련 컴포넌트 재배치
        	this.setUserGridOnCellMoved(grid, this.arrangeOverFilterComps, this);

        	// 사용자에 의해 컬럼 사이즈가 변경된 경우 필터 관련 컴포넌트 재배치
        	this.setUserGridOnColResized(grid, this.arrangeOverFilterComps, this);

        	// 필터 조건 팝업 컴포넌트 추가
        	var form = grid.parent;
        	var pdiv = Eco.XComp.getUserProperty(form, "overFilterPopupDiv");

        	if ( Eco.isUndefined( pdiv ) )
        	{
        		var name = Eco.getUniqueId("pdiv_");

        		pdiv = new PopupDiv();
        		//	pdiv.init(name, "absolute", 0, 0, 200, 150);
        		pdiv.init(name, 0, 0, 200, 150);
        		form.addChild(pdiv.name, pdiv);
        		pdiv.set_url("GridFilter::GridFilterPop.xfdl");
        		pdiv.set_formscrollbartype("none");
        		pdiv.set_background("#e8e8e8ff");
        		pdiv.set_border("1px solid gray");
        		pdiv.addEventHandler("oncloseup", this.filterPdivOnCloseUpHandler, this);
        		pdiv.show();
        		Eco.XComp.setUserProperty(form, "overFilterPopupDiv", pdiv);
        	}

        	// 필터 가능 표시 컴포넌트 추가 - 대상 그리드 별로 추가
        	var img = new ImageViewer();
        	var name = Eco.getUniqueId("img_");
        	var imageSize = this.FILTER_ENABLE_IMAGE_SIZE;

        	//	img.init(name, "absolute", 0, 0, imageSize[0], imageSize[1]);
        	img.init(name, 0, 0, imageSize[0], imageSize[1]);

        	img.set_background("transparent URL('"+this.FILTER_ENABLE_IMAGE_URL+"') center middle");

        	img.set_border("0px none #ffffffff");
        	img.set_cursor("hand");
        	img.set_visible(false);
        	img.addEventHandler("onclick", this.filterImgOnClickHandler, this);
        	grid.parent.addChild(img.name, img);
        	img.show();

        	Eco.XComp.setUserProperty(img, "grid", grid);				// 이미지에서 그리드 참조
        	Eco.XComp.setUserProperty(img, "overFilterPopupDiv", pdiv);	// 이미지에서 팝업 참조
        	Eco.XComp.setUserProperty(grid, "filterEnableImage", img);	// 그리드에서 이미지 참조

        	// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
        	Eco.XComp.setUserProperty(grid, "initGridHeadOverFilter", true);
        }

        /**
         * onclick Event Handler
         * @param {ImageViewer} obj Event가 발생한 ImageViewer Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.filterImgOnClickHandler = function(obj, e)
        {
        	var grid = Eco.XComp.getUserProperty(obj, "grid");
        	var pdiv = Eco.XComp.getUserProperty(obj, "overFilterPopupDiv");
        	var form = grid.parent;

        	var refCell = Eco.XComp.getUserProperty(obj, "refCell");
        	var index = this.getBodyCellIndex(grid, this.getCellObjectIndex(refCell));
        	var displayType = grid.getCellProperty("body", index, "displaytype");
        	var columnName = this.getBindColumnNameByIndex(grid, index);

        	var filterType;
        	var filterInfo = this.getFilterInfo(grid, columnName);

        	// 컬럼 타입별 필터 타입 정보 지정 및 Popup 크기 지정

        	var w, h;
        	if ( displayType == "combo" )
        	{
        		filterType = "combo";

        		w = 150;
        		h = 150;
        	}
        	else if ( displayType == "date" )
        	{
        		filterType = "date";

        		w = 280;
        		h = 172;
        	}
        	else if ( displayType == "number" || displayType == "currency" )
        	{
        		filterType = "number";

        		w = 280;
        		h = 172;
        	}
        	else
        	{
        		// 데이터셋 자료형에 맞게 필터타입 지정
        		var ds = Eco.XComp.lookup(form, grid.binddataset);
        		var colType = ds.getColumnInfo(columnName).type;

        		switch(colType)
        		{
        			case 'INT' :
        			case 'FLOAT' :
        			case 'BIGDECIMAL' :
        				filterType = "number";
        				break;
        			default :
        				filterType = "default";
        		}

        		w = 280;
        		h = 172;
        	}

        	// PopupDiv 는 form 에 유일하게 하나이고 공통으로 사용하므로 현재 grid 및 정보값을 지정한다.
        	Eco.XComp.setUserProperty(pdiv, "grid", grid);
        	Eco.XComp.setUserProperty(pdiv, "refCell", refCell);
        	Eco.XComp.setUserProperty(pdiv, "filterHeadCellIndex", this.getCellObjectIndex(refCell) );
        	Eco.XComp.setUserProperty(pdiv, "filterColumnName", columnName);

        	// 팝업 화면에 필터 정보 지정
        	pdiv.form.setFilterInfo(filterType, filterInfo);

        	// 팝업 호출
        	pdiv.trackPopupByComponent(obj, 0, obj.getOffsetHeight(), w, h);
        }

        /**
         * oncloseup Event Handler
         * @param {PopupDiv} obj Event가 발생한 PopupDiv Component
         * @param {EventInfo} e EventInfo
         */
        this.filterPdivOnCloseUpHandler = function(obj, e)
        {
        	var grid = Eco.XComp.getUserProperty(obj, "grid");
        	var form = grid.parent;

        	// 필터버튼 숨기기
        	var filterEnableImage = Eco.XComp.getUserProperty(grid, "filterEnableImage");
        	filterEnableImage.set_visible(false);

        	// 필터적용 표시
        	var headCellIndex = Eco.XComp.getUserProperty(obj, "filterHeadCellIndex");
        	var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
        	var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);
        	var filterInfo = this.getFilterInfo(grid, columnName);

        	var name = grid.name + "_filterApplyImage_"+headCellIndex;
        	var image = form.components[name];

        	if ( Eco.isEmpty(filterInfo) )
        	{
        		if ( !Eco.isEmpty(image) )
        		{
        			image.set_visible(false);
        			Eco.XComp.setUserProperty(image, "filtered", false);
        		}
        	}
        	else
        	{
        		if ( Eco.isEmpty(image) )
        		{
        			var imageSize = this.FILTER_APPLY_IMAGE_SIZE;

        			image = new ImageViewer();
        			//	image.init(name, "absolute", 0, 0, imageSize[0], imageSize[1]);
        			image.init(name, 0, 0, imageSize[0], imageSize[1]);
        			image.set_image(this.FILTER_APPLY_IMAGE_URL);
        			image.set_background("transparent");
        			image.set_border("0px none #ffffffff");
        			image.set_cursor("hand");
        			image.set_visible(false);
        			form.addChild(image.name, image);
        			image.show();

        			image.moveToNext(filterEnableImage);

        			// 컬럼명을 속성에 추가하여 실체가 존재하는지 체크함
        			Eco.XComp.setUserProperty(image, "gridBindColumn", columnName);

        			var overFilterCompNameList = Eco.XComp.getUserProperty(grid, "overFilterCompNameList");
        			overFilterCompNameList.push(image.name);
        		}

        		var xy = this.getCompXYFromGridHeadCellRight(grid, headCellIndex, image);
        		if ( xy[0] > -1 && xy[1] > -1 )
        		{
        			image.move(xy[0], xy[1]);
        			image.set_visible(true);
        		}
        		else
        		{
        			image.set_visible(false);
        		}

        		Eco.XComp.setUserProperty(image, "filtered", true);
        		Eco.XComp.setUserProperty(image, "refCell", this.getGridCellObject(grid, "head", headCellIndex) );
        	}
        }

        /**
         * onmousemove Event Handler
         * @param {Grid} obj Event가 발생한 Grid Component
         * @param {GridMouseEventInfo} e GridMouseEventInfo
         */
        this.filterGridOnMouseMoveHandler = function(obj, e)
        {
        	var filterEnableImage = Eco.XComp.getUserProperty(obj, "filterEnableImage");	//	trace("filterEnableImage--->"+filterEnableImage.name);
        	var pdiv = Eco.XComp.getUserProperty(filterEnableImage, "overFilterPopupDiv");  //	trace("pdiv--->"+pdiv.name);
        																					//trace("pdiv.visible--->"+ pdiv.visible );

        	// 팝업이 떠있는 상태일 경우엔 skip
        	if ( pdiv.visible ) return;

        	// 사용자에 의해 컬럼 사이즈가 변경 중인 경우 필터 가능 이미지 숨기기
        	if ( this.isGridColResizing(obj) && e.row == -1 )
        	{
        		filterEnableImage.set_visible(false);
        		return;
        	}

        	// 현재 마우스 위치의 cell 에 필터 이미지 보여주기 및 대상 지정
        	var x = e.clientx;
        	var y = e.clienty;										//	trace("y--->"+y);
        	var headRowSize = obj.getRealRowFullSize("head");		//	trace("headRowSize--->"+headRowSize);

        	if ( y < headRowSize )
        	{
        		var headCellIndex = e.cell;

        		if ( headCellIndex < 0 )
        		{
        			filterEnableImage.set_visible(false);
        			return;
        		}

        		if ( this.getBodyCellIndex(obj, headCellIndex) > -1 )
        		{
        			var xy = this.getCompXYFromGridHeadCellRight(obj, headCellIndex, filterEnableImage);

        			if ( xy[0] > -1 && xy[1] > -1 )
        			{
        				filterEnableImage.move(xy[0], xy[1]);
        				filterEnableImage.set_visible(true);
        			}
        			else
        			{
        				filterEnableImage.set_visible(false);
        			}

        			// 현재 cell object 를 속성에 달아두자...
        			var refCell = this.getGridCellObject(obj, "head", headCellIndex);
        			Eco.XComp.setUserProperty(filterEnableImage, "refCell", refCell );
        		}
        		else
        		{
        			filterEnableImage.set_visible(false);
        		}
        	}
        	else
        	{
        		filterEnableImage.set_visible(false);
        	}
        }

        /**
         * 그리드 헤드 셀 우측영역에 위치할 컴포넌트의 좌표를 반환
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex Grid Head Cell Index
         * @param {XPComp} comp 대상 컴포넌트
         * @return {array} x, y 좌표 (위치할 수 없을 경우 -1)
         */
        this.getCompXYFromGridHeadCellRight = function(grid, headCellIndex, comp)
        {
        	var col = grid.getCellProperty("head", headCellIndex, "col");
        	var band = grid.getFormatColProperty(col, "band");
        	var pivotIndex = Eco.decode(band, "left", -1, "right", -2, 0);
        	var cellRect = grid.getCellRect(-1, headCellIndex, pivotIndex);

        	var scrollWidth = Eco.XComp.PositionSize.getCurrentScrollBarSize(grid, "vert");
        	var gridLeft = grid.getOffsetLeft();
        	var gridTop = grid.getOffsetTop();
        	var gridAvailRight = gridLeft + grid.getOffsetWidth() - scrollWidth;

        	var x = -1,
        	    y = -1;

        	if ( gridLeft + cellRect.left < gridAvailRight )
        	{
        		var l = cellRect.left;
        		var r = cellRect.right;
        		if ( l < gridLeft )
        		{
        			l = 0;
        		}
        		if ( gridLeft + r > gridAvailRight )
        		{
        			r = gridAvailRight - gridLeft;
        		}

        		x = gridLeft + l + ( (r-l) - comp.getOffsetWidth());
        		y = gridTop + cellRect.top + Math.round((cellRect.height - comp.getOffsetHeight())/2);

        		if ( x < gridLeft )
        		{
        			x = -1;
        		}
        		if ( y < gridTop )
        		{
        			y = -1;
        		}
        	}

        	return [x, y];
        }

        /**
         * Grid head over filter 기능에 필요한 컴포넌트 위치 조정
         * @param {Grid} grid 대상 Grid Component
         */
        this.arrangeOverFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comps = form.components;
        	var comp, list = Eco.XComp.getUserProperty(grid, "overFilterCompNameList");
        	var xy, column, removed;

        	for (var i=0; i<list.length; i++)
        	{
        		comp = comps[list[i]];
        		column = Eco.XComp.getUserProperty(comp, "gridBindColumn");

        		// 대상 그리드에 존재하지 않는 컬럼이면 컴포넌트 및 필터 정보 제거
        		if ( grid.getBindCellIndex("body", column) < 0 )
        		{
        			Eco.array.removeAt(comps, i);
        			removed = form.removeChild(comp.name);
        			removed.destroy();
        			i--;
        		}
        		else
        		{
        			if ( comp && Eco.XComp.getUserProperty(comp, "filtered") )
        			{
        				refCell = Eco.XComp.getUserProperty(comp, "refCell");

        				xy = this.getCompXYFromGridHeadCellRight(grid, this.getCellObjectIndex(refCell), comp);
        				if ( xy[0] > -1 && xy[1] > -1 )
        				{
        					comp.move(xy[0], xy[1]);
        					comp.set_visible(true);
        				}
        				else
        				{
        					comp.set_visible(false);
        				}
        			}
        		}
        	}
        }

        /**
         * Grid head over filter 기능에 추가된 컴포넌트 제거
         * @param {Grid} grid 대상 Grid Component
         */
        this.removeOverFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comps = form.components;
        	var comp, list = Eco.XComp.getUserProperty(grid, "overFilterCompNameList");
        	var removed;

        	for (var i=0,len=list.length; i<len; i++)
        	{
        		comp = comps[list[i]];
        		if ( comp )
        		{
        			removed = form.removeChild(comp.name);
        			removed.destroy();
        		}
        	}

        	// 정보 초기화
        	Eco.XComp.setUserProperty(grid, "overFilterCompNameList", []);

        	this.clearFilter(grid);
        }


        /******************************************************************************
        	3. 그리드 헤드 영역 추가 필터기능 관련 function
        ******************************************************************************/

        /**
         * Grid head에 filer 기능 추가하기 초기화
         * @param {Grid} grid 대상 Grid Component
         */
        this.initGridHeadAppendFilter = function(grid)
        {

        	// 대상이 이미 초기화 되었는지 확인
        	if ( Eco.XComp.getUserProperty(grid, "initGridHeadAppendFilter") )
        	{
        		return;
        	}

        	// 필터영역(Div) 컴포넌트 name 을 담아둘 속성 추가
        	Eco.XComp.setUserProperty(grid, "appendFilterCompNameList", []);

        	// 필터적용 정보를 담아둘 속성 추가
        	Eco.XComp.setUserProperty(grid, "filterInfos", {});

        	// 사용자에 의해 셀이 이동된 경우 필터 관련 컴포넌트 재배치
        	this.setUserGridOnCellMoved(grid, this.arrangeAppendFilterComps, this);

        	// 사용자에 의해 컬럼 사이즈가 변경된 경우 필터 관련 컴포넌트 재배치
        	this.setUserGridOnColResized(grid, this.arrangeAppendFilterComps, this);

        	// add onhscroll handler - 가로 스크롤 발생 시 컴포넌트 재배치
        	grid.addEventHandler("onhscroll", this.arrangeAppendFilterComps, this);

        	// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
        	Eco.XComp.setUserProperty(grid, "initGridHeadAppendFilter", true);
        }


        /**
         * Grid head append filter 보이기
         * @param {Grid} grid 대상 Grid Component
         */
        this.showHeadAppendFilter = function(grid)
        {
        	var index = Eco.XComp.getUserProperty(grid, "appendHeadRowIndex");
        	if ( Eco.isUndefined(index) )
        	{
        		index = grid.appendContentsRow("head");
        		// 추가된 head row index를 담아두어 제거시 사용
        		Eco.XComp.setUserProperty(grid, "appendHeadRowIndex", index);

        		this.arrangeAppendFilterComps(grid);
        	}
        }

        /**
         * Grid head append filter 숨기기 (필터제거 포함)
         * @param {Grid} grid 대상 Grid Component
         */
        this.hideHeadAppendFilter = function(grid)
        {
        	var index = Eco.XComp.getUserProperty(grid, "appendHeadRowIndex");
        	if ( !Eco.isUndefined(index) )
        	{
        		grid.deleteContentsRow("head", index);

        		// Div 숨기기 및 값 초기화
        		var comps = grid.parent.components;
        		var comp, nameList = Eco.XComp.getUserProperty(grid, "appendFilterCompNameList");
        		for (var i=0,len=nameList.length; i<len; i++)
        		{
        			comp = comps[nameList[i]];
        			if ( comp )
        			{
        				comp.set_visible(false);
        				comp.initValue();
        			}
        		}

        		// 정보 초기화
        		Eco.XComp.deleteUserProperty(grid, "appendHeadRowIndex");

        		this.clearFilter(grid);
        	}
        }

        /**
         * Grid head append filter 기능에 필요한 컴포넌트 생성 및 위치 조정
         * @param {Grid} grid 대상 Grid Component
         */
        this.arrangeAppendFilterComps = function(grid, e)
        {
        	var index = Eco.XComp.getUserProperty(grid, "appendHeadRowIndex");

        	if ( Eco.isUndefined(index) ) return;

        	// 스크롤 이벤트에 의해 호출된 경우
        	var adjustRectSize = 0;
        	if ( e )
        	{
        		switch(e.type)
        		{
        			// 아래의 경우 처리 불필요
        			case 'trackfirstover' :
        			case 'tracklastover' :
        			case 'trackstart' :
        				return;
        				break;
        			case 'track' :
        			case 'pageleft' :
        			case 'pageright' :
        				// 이 type 으로 이벤트가 발생한 시점에 rect이 정확치 않다.
        				// getCellRect 에서 scroll 값을 참조하는데 scroll 이벤트 발생 후 값이 반영되는 듯 하다.
        				Eco.XComp.Event.requestAnimationFrame(this.arrangeAppendFilterComps, this, grid);
        				return;
        				break;
        		}
        	}



        	//	var form = grid.parent;		//	trace("form.name--->"+form.name); //form
        	var form = this.oFrmParnt;		//	trace("form.name--->"+form.name); //POList
        									//	trace("grid.name-->"+grid.name);
        	var nameList = this.gfn_nvl(Eco.XComp.getUserProperty(grid, "appendFilterCompNameList"),  Array());	//	trace("nameList--->"+nameList);

        	var comp, comps = form.components;	//	trace("comps--->"+comps);
        	for (var i=0,len=nameList.length; i<len; i++)
        	{
        		comp = comps[nameList[i]];
        		if ( comp )
        		{
        			comp.set_visible(false);
        		}
        	}

        	//	var filterInfos = Eco.XComp.getUserProperty(grid, "filterInfos");
        	//	var filterInfos = this.gfn_nvl(Eco.XComp.getUserProperty(grid, "filterInfos"), Array());
        		var filterInfos = this.gfn_nvl(Eco.XComp.getUserProperty(grid, "filterInfos"), {});

        	var gridEcoPos = Eco.XComp.PositionSize.getTopLevelFormBox(grid);	// [ leftPosition, topPosition, wdith, height ]
        	var gridLeftPos = gridEcoPos[0]				//	grid.getOffsetLeft();
        	var gridTopPos = gridEcoPos[1]				//	grid.getOffsetTop();

        	var gridWidth = grid.getOffsetWidth();
        	var gridPos = [gridLeftPos, gridTopPos, gridLeftPos + gridWidth, gridTopPos + grid.getOffsetBottom()];
        	var borderWidths = Eco.XComp.Style.getBorderWidth(grid);
        	var scrollWidth = grid.vscrollbar ? grid.vscrollbar.getOffsetWidth() : 0;

        	var rect, rects = [];
        	var cellCnt = grid.getCellCount("head");
        	var bodyCellIndex, columnName, comp, name, type, info;
        	var col, colspan, band, pivotIndex;
        	var l, t, w, h;

        	// band "left", "body", "right" 를 고려하여 현재 보이는 셀 영역을 찾는다.
        	var hScrollPos = grid.hscrollbar ? grid.hscrollbar.pos : 0;
        	var hScrollMax = grid.hscrollbar ? grid.hscrollbar.max : 0;
        	var vScrollWidth = grid.vscrollbar ? grid.vscrollbar.getOffsetWidth() : 0;
        	var areaLeft = 0;
        	var areaRight = grid.getOffsetWidth() - vScrollWidth;
        	var makeInfo = [];

        	// head 'left' and 'right' band
        	for (var i=0; i<cellCnt; i++)
        	{
        		if ( grid.getCellProperty("head", i, "row") == index )
        		{
        			col = grid.getCellProperty("head", i, "col");
        			band = grid.getFormatColProperty(col, "band");

        			if ( band == "body" ) continue;

        			rect = grid.getCellRect(-1, i, Eco.decode(band, "left", -1, "right", -2, 0));

        			if ( band == "left" )
        			{
        				l = rect.left;
        				r = rect.right;
        				areaLeft = Math.max(areaLeft, rect.right);
        			}
        			else if ( band == "right" )
        			{
        				l = rect.left - hScrollMax;
        				areaRight = Math.min(areaRight, l);
        			}

        			makeInfo.push({
        				'cell': i,
        				'left': l,
        				'top': rect.top,
        				'width': rect.width,
        				'height': rect.height
        			});
        		}
        	}

        	// head 'body' band
        	for (var i=0; i<cellCnt; i++)
        	{
        		if ( grid.getCellProperty("head", i, "row") == index )
        		{
        			col = grid.getCellProperty("head", i, "col");
        			band = grid.getFormatColProperty(col, "band");

        			if ( band == "body" )
        			{
        				rect = grid.getCellRect(-1, i, 0);

        				l = rect.left;
        				r = rect.right;

        				if ( r > areaLeft && l < areaRight )
        				{
        					if ( l < areaLeft )
        					{
        						l = areaLeft;
        					}

        					if ( r > areaRight )
        					{
        						r = areaRight;
        					}

        					w = r - l;

        					// 보이는 셀 영역 최소 기준 값 적용
        					if ( w >= 50 )
        					{
        						makeInfo.push({
        							'cell': i,
        							'left': l,
        							'top': rect.top,
        							'width': r - l,
        							'height': rect.height
        						});
        					}
        				}
        			}
        		}
        	}

        	// 현재 보이는 cell 영역에 필터 입력 영역 생성
        	var len = makeInfo.length;
        	var info;
        	for (var i=0; i<len; i++)
        	{
        		info = makeInfo[i];
        		bodyCellIndex = this.getBodyCellIndex(grid, info.cell);
        		columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);
        		type = grid.getCellProperty("body", bodyCellIndex, "displaytype");

        		if ( Eco.isUndefined(type) ) type = "normal";

        		name = grid.name + "_headAppendComp" + i;

        		// 컴포넌트가 존재하지 않으면 추가
        		if ( Eco.array.indexOf(nameList, name) < 0 )
        		{
        			nameList.push(name);

        			//	comp = new Div(name, "absolute", 0, 0, 0, 0);
        			comp = new Div(name, 0, 0, 0, 0);
        			comp.set_border("0px none #ffffff");
        			comp.set_formscrollbartype("none");
        			comp.set_async(false);
        			comp.set_visible(false);
        			form.addChild(comp.name, comp);
        			comp.set_url("GridFilter::GridFilterDiv.xfdl");
        			comp.show();
        		}
        		else
        		{
        			comp = form.components[name];

        			// 내용 초기화
        			comp.initValue();
        		}

        		// Div에 참조값 지정
        		Eco.XComp.setUserProperty(comp, "grid", grid);
        		Eco.XComp.setUserProperty(comp, "refCell", this.getGridCellObject(grid, "head", info.cell));
        		Eco.XComp.setUserProperty(comp, "displayType", type);
        		Eco.XComp.setUserProperty(comp, "filterColumnName", columnName);
        		Eco.XComp.setUserProperty(comp, "filterInfo", filterInfos[columnName]);

        		// 필터 정보 지정
        		comp.form.setFilterInfo();

        		// 위치 조정
        		l = gridPos[0] + info.left;
        		t = gridPos[1] + info.top + borderWidths[1];
        		w = info.width - 1;
        		h = info.height - 1;

        		comp.move(l, t, w, h);
        		comp.set_visible(true);
        	}

        	var div = Eco.XComp.getUserProperty(grid, "currentFocusDiv");
        	if ( !Eco.isEmpty(div) ) div.setFocus();
        }

        /**
         * Grid head append filter 기능에 추가된 컴포넌트 제거
         * @param {Grid} grid 대상 Grid Component
         */
        this.removeAppendFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comps = form.components;
        	var comp, nameList = Eco.XComp.getUserProperty(grid, "appendFilterCompNameList");
        	var removed;
        	for (var i=0,len=nameList.length; i<len; i++)
        	{
        		comp = comps[nameList[i]];
        		if ( comp )
        		{
        			removed = form.removeChild(comp.name);
        			removed.destroy();
        		}
        	}
        }


        /******************************************************************************
        	4. 필터 처리 core function
        ******************************************************************************/

        // 필터 가능 표시 이미지
        this.FILTER_ENABLE_IMAGE_URL = "Images::grd_filter_combo.png";
        this.FILTER_ENABLE_IMAGE_SIZE = [17, 15];

        // 필터 적용 표시 이미지
        this.FILTER_APPLY_IMAGE_URL = "Images::grd_filter_check.png";
        this.FILTER_APPLY_IMAGE_SIZE = [17, 15];

        /**
         * 대상 그리드에서 주어진 컬럼에 해당하는 필터 정보를 반환한다.
         * @param {Grid} grid 대상 Grid Component
         * @param {string} columnName 적용할 조건식
         * @return {array} 필터 정보로 {logic, operator, value} 형태의 object 배열이다.
         */
        this.getFilterInfo = function(grid, columnName)
        {
        	var filterInfos = Eco.XComp.getUserProperty(grid, "filterInfos");

        	return filterInfos[columnName];
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 정보를 지정한다.
         * @param {Grid} grid 대상 Grid Component
         * @param {string} columnName 적용할 조건식
         * @param {array} datas 필터 데이터로 {logic, operator, value} 형태의 object 배열이다.
         */
        this.setFilterInfo = function(grid, columnName, datas)
        {
        		var filterInfos = Eco.XComp.getUserProperty(grid, "filterInfos");
        		filterInfos[columnName] = datas;
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 데이터를 제거한다.
         * @param {Grid} grid 대상 Grid Component
         * @param {string} columnName 대상 데이터셋 컬럼명
         */
        this.removeFilterInfo = function(grid, columnName)
        {
        	var filterInfos = Eco.XComp.getUserProperty(grid, "filterInfos");
        	var filterInfo = filterInfos[columnName];

        	if ( !Eco.isUndefined(filterInfo) )
        	{
        		filterInfo = null;
        		delete filterInfos[columnName];
        	}
        }

        /**
         * 대상 그리드 필터 실행
         * @param {Grid} grid 대상 Grid Component
         */
        this.executeFilter = function(grid)
        {
        	var ds = Eco.XComp.lookup(grid.parent, grid.binddataset);

        	var filterString = "";
        	var filterInfos = Eco.XComp.getUserProperty(grid, "filterInfos");
        	var filterInfo;
        	var info, colType, logic;

        	// 필터 항목의 데이터를 추출하여 filter string 을 만든다.
        	for (var columnName in filterInfos )
        	{
        		if ( filterInfos.hasOwnProperty(columnName) )
        		{
        			if ( !Eco.isEmpty(filterString) )
        			{
        				filterString += " && ";
        			}

        			filterInfo = filterInfos[columnName];
        			colType = ds.getColumnInfo(columnName).type;

        			filterString += "(";

        			for (var i=0,len=filterInfo.length; i<len; i++)
        			{
        				info = filterInfo[i];
        				logic = info.logic;

        				if ( i > 0  )
        				{
        					if ( logic == "and" )
        					{
        						filterString += " && ";
        					}
        					else if ( logic == "or" )
        					{
        						filterString += " || ";
        					}
        				}

        				filterString += this.getFilterExprString(columnName, colType, info.operator, info.value);
        			}

        			filterString += ")";
        		}
        	}

        	//Eco.Logger.debug("filter==>"+filterString);

        	// 필터 적용
        	ds.filter(filterString);
        }

        /**
         * 현재 적용된 필터를 제거한다.
         * @param {Grid} grid 대상 Grid Component
         */
        this.clearFilter = function(grid)
        {
        	// 데이터셋 필터 제거
        	var ds = Eco.XComp.lookup(grid.parent, grid.binddataset);
        	ds.filter("");

        	// 정보 초기화
        	Eco.XComp.setUserProperty(grid, "filterInfos", {});
        }

        /**
         * 필터 조건문 문자열을 반환
         * @param {string} columnName 필터 대상 데이터셋 컬럼명
         * @param {string} colType 필터 대상 데이터셋 컬럼형
         * @param {string} operator 연산자
         * @param {*} value 피연산자 값
         */
        this.getFilterExprString = function(columnName, colType, operator, value)
        {
        	var expr = "";
        	switch(operator)
        	{
        		case 'equal' :
        			expr = "==" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'notEqual' :
        			expr = "!=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'greaterThan' :
        			expr = ">" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'greaterThanOrEqual' :
        			expr = ">=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'lessThan' :
        			expr = "<" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'lessThanOrEqual' :
        			expr = "<=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
        		break;
        		case 'startWith' :
        			expr = ".toString().substr(0, "+value.length+") == '" + value + "'";
        		break;
        		case 'endWith' :
        			expr = ".toString().substr("+columnName+".toString().length-"+value.length+") == '" + value + "'";
        		break;
        		case 'contains' :
        			expr = ".toString().search('"+value+"') > -1";
        		break;
        	}

        	if ( !Eco.isEmpty(expr) )
        	{
        		expr = columnName + expr;
        	}

        	return expr;
        }


        /******************************************************************************
        	5. Grid Utility function
        ******************************************************************************/

        /**
         * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {Grid} grid 대상 Grid Component
         * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
         * @param {number} index 얻고자 하는 cell 의 index
         * @return {object} cell object
         */
        this.getGridCellObject = function(grid, band, index)
        {
        	// 내부속성을 통해 얻어온다.
        	var refCell;
        	var format = grid._curFormat;
        	if (format)
        	{
        		if ( band == "head" )
        		{
        			refCell = format._headcells[index];
        		}
        		else if ( band == "body" )
        		{
        			refCell = format._bodycells[index];
        		}
        		else if ( band == "summ" || band == "summary" )
        		{
        			refCell = format._summcells[index];
        		}
        	}

        	return refCell;
        }

        /**
         * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {object} cell 대상 cell object
         * @return {number} cell index
         */
        this.getCellObjectIndex = function(cell)
        {
        	return cell._cellidx;
        }

        /**
         * body cell index로 binding 된 컬럼명을 얻어온다.
         * @param {Grid} grid 대상 Grid Component
         * @param {number} index body cell index
         */
        this.getBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");
        	if ( subCell > 0 )
        	{
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	}
        	else
        	{
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if ( !Eco.isEmpty(text) )
        	{
        		if ( text.search(/^BIND\(/) > -1 )
        		{
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		}
        		else if ( text.search(/^bind:/) > -1 )
        		{
        			columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /**
         * head cell에 match되는 body cell을 얻어온다
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex head cell index
         * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
         */
        this.getBodyCellIndex = function(grid, headCellIndex, useColspan)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;
        	for (var i=0, len=grid.getCellCount("head"); i<len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row)
        		{
        			maxHeadRow = row;
        		}
        	}
        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");
        		if (maxBodyRow < row)
        		{
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0)
        	{
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow)
        	{
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	}
        	else
        	{
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
        		if ( useColspan )
        		{
        			if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
        			{
        				cellIndex = i;
        				break;
        			}
        		}
        		else
        		{
        			if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        			{
        				cellIndex = i;
        				break;
        			}
        		}
        	}
        	return cellIndex;
        }

        /**
         * Grid column 이 사용자에 의해 resizing 중인지 여부를 반환
         * @param {Grid} grid 대상 Grid Component
         * @return {boolean} resizing 여부 반환
         */
        this.isGridColResizing = function(grid)
        {
        	// 내부 속성을 확인한다.
        	var resizer = grid._resizer_elem;
        	if ( resizer && resizer._is_tracking )
        	{
        		return true;
        	}
        	return false;
        }

        /**
         * column resize 가 완료되었을 때 주어진 함수를 호출한다.<br>
         * (Column resize 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
         * @param {Grid} grid 대상 Grid Component
         * @param {function} func resize가 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldvalue, newvalue} )
         * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
         */
        this.setUserGridOnColResized = function(grid, func, scope)
        {
        	// check grid argument
        	if ( Eco.isEmpty(grid) || Eco.XComp.typeOf(grid) != "Grid" )
        	{
        		var msg = {
        			'message': "1'st argument must be a Grid Component",
        			'stack' : true
        		};
        		Eco.Logger.error(msg);
        	}

        	// check func argument
        	if ( Eco.isEmpty(func) || !Eco.isFunction(func) )
        	{
        		var msg = {
        			'message': "2'nd argument must be a Function",
        			'stack' : true
        		};
        		Eco.Logger.error(msg);
        	}

        	// check scope argument
        	if ( Eco.isEmpty(scope) )
        	{
        		scope = grid.parent;
        	}

        	// 대상 그리드에 이미 추가 되었는지 확인
        	if ( Eco.XComp.getUserProperty(grid, "setUserGridOnColResized") )
        	{
        		return;
        	}

        	// add onmousemove handler
        	// 마우스 이동 시 내부 속성을 확인하여 리사이즈 정보를 지정한다.
        	grid.addEventHandler("onmousemove", function(obj, e) {

        		if ( obj.cellsizingtype == "col" || obj.cellsizingtype == "both" )
        		{
        			Eco.XComp.setUserProperty(obj, "colResizeInfo", null);

        			var resizer = obj._resizer_elem;
        			if ( resizer && resizer._is_tracking )
        			{
        				var idx = resizer._index;
        				var pos = resizer._movedPos;
        				if ( idx > -1 && pos != 0 )
        				{
        					Eco.XComp.setUserProperty(obj, "colResizeInfo", {
        						'col' : idx,
        						'oldvalue' : obj.getRealColSize(idx)
        					});
        				}
        			}
        		}

        	}, scope);

        	// add onlbuttonup handler
        	grid.addEventHandler("onlbuttonup", function(obj, e) {

        		if ( obj.cellsizingtype == "col" || obj.cellsizingtype == "both" )
        		{
        			var colResizeInfo = Eco.XComp.getUserProperty(obj, "colResizeInfo");
        			if ( !Eco.isEmpty(colResizeInfo) )
        			{
        				var info = {
        					'col': colResizeInfo.col,
        					'oldvalue': colResizeInfo.oldvalue,
        					'newvalue': obj.getRealColSize(colResizeInfo.col)
        				};
        				func.call(scope, obj, info);
        			}
        		}

        	}, scope);

        	// 재정의 방지용
        	Eco.XComp.setUserProperty(grid, "setUserGridOnColResized", true);
        }

        /**
         * cell move 가 발생할 때 주어진 함수를 호출한다.<br>
         * (cell moving 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
         * @param {Grid} grid 대상 Grid Component
         * @param {function} func moving이 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldcell, newcell, oldcol, newcol} )
         * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
         */
        this.setUserGridOnCellMoved = function(grid, func, scope)
        {
        	// check grid argument
        	if ( Eco.isEmpty(grid) || Eco.XComp.typeOf(grid) != "Grid" )
        	{
        		var msg = {
        			'message': "1'st argument must be a Grid Component",
        			'stack' : true
        		};
        		Eco.Logger.error(msg);
        	}

        	// check func argument
        	if ( Eco.isEmpty(func) || !Eco.isFunction(func) )
        	{
        		var msg = {
        			'message': "2'nd argument must be a Function",
        			'stack' : true
        		};
        		Eco.Logger.error(msg);
        	}

        	// check scope argument
        	if ( Eco.isEmpty(scope) )
        	{
        		scope = grid.parent;
        	}

        	// 대상 그리드에 이미 추가 되었는지 확인
        	if ( Eco.XComp.getUserProperty(grid, "setUserGridOnCellMoved") )
        	{
        		return;
        	}

        	// add onlbuttondown handler
        	grid.addEventHandler("onlbuttondown", function(obj, e) {
        		if ( obj.cellmovingtype == "col" && e.row == -1 )
        		{
        			var cellMovingInfo = {
        				'oldcell': e.cell,
        				'oldcol': e.col,
        				'refCell': this.getGridCellObject(obj, "head", e.cell)
        			};
        			Eco.XComp.setUserProperty(obj, "cellMovingInfo", cellMovingInfo);
        		}
        		else
        		{
        			Eco.XComp.setUserProperty(obj, "cellMovingInfo", null);
        		}

        	}, scope);

        	// add onlbuttonup handler
        	grid.addEventHandler("onlbuttonup", function(obj, e) {
        		if ( obj.cellmovingtype == "col" && e.row < 0 )
        		{
        			var cellMovingInfo = Eco.XComp.getUserProperty(obj, "cellMovingInfo");

        			if ( !Eco.isEmpty(cellMovingInfo) )
        			{
        				if ( cellMovingInfo.oldcell != e.cell )
        				{
        					var info = {
        						'oldcell': cellMovingInfo.oldcell,
        						'newcell': cellMovingInfo.refCell._cellidx,
        						'oldcol': cellMovingInfo.oldcol,
        						'newcol': cellMovingInfo.refCell._col
        					};

        					func.call(scope, obj, info);

        					Eco.XComp.setUserProperty(obj, "cellMovingInfo", null);
        				}
        			}
        		}

        	}, scope);

        	Eco.XComp.setUserProperty(grid, "setUserGridOnCellMoved", true);
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
