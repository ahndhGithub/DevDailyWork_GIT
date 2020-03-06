//XJS=All_EduLib.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Src_HintsEduLib::Comp.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Excel.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Frame.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Grid.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::GridFilter.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Message.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Popup.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Transaction.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Util.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Validation.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::Util_adh.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::QmeNexa.xjs");
        this.addIncludeScript(path,"Src_HintsEduLib::ExportObject.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("Src_HintsEduLib::Comp.xjs"); /*include "Src_HintsEduLib::Comp.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Excel.xjs"); /*include "Src_HintsEduLib::Excel.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Frame.xjs"); /*include "Src_HintsEduLib::Frame.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Grid.xjs"); /*include "Src_HintsEduLib::Grid.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::GridFilter.xjs"); /*include "Src_HintsEduLib::GridFilter.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Message.xjs"); /*include "Src_HintsEduLib::Message.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Popup.xjs"); /*include "Src_HintsEduLib::Popup.xjs"*/;

        this.executeIncludeScript("Src_HintsEduLib::Transaction.xjs"); /*include "Src_HintsEduLib::Transaction.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Util.xjs"); /*include "Src_HintsEduLib::Util.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::Validation.xjs"); /*include "Src_HintsEduLib::Validation.xjs"*/;

        this.executeIncludeScript("Src_HintsEduLib::Util_adh.xjs"); /*include "Src_HintsEduLib::Util_adh.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::QmeNexa.xjs"); /*include "Src_HintsEduLib::QmeNexa.xjs"*/;
        this.executeIncludeScript("Src_HintsEduLib::ExportObject.xjs"); /*include "Src_HintsEduLib::ExportObject.xjs"*/;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
