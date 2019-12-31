"use strict";

{
	C3.Plugins.Rex_NGIO_Medal.Exps =
	{
		ErrorMessage() {
			var val;
			if (this.lastResult && this.lastResult["error"])
				val = this.lastResult["error"]["message"];
			return(val || "");
		},
		
		MedalsAsJSON() {
			var val;
			if (this.lastMedals)
				val = JSON.stringify(this.lastMedals);
			return(val || "");
		},
		
		CurMedalDescription() {
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["description"];
			return(val || "");
		},
		
		CurMedalDifficulty(){
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["difficulty"];
			return(val || -1);
		},
		
		CurMedalIcon() {
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["icon"];
			return(val || "");
		},
		
		CurMedalID() {
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["id"];
			return(val || -1);
		},
		
		CurMedalName() {
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["name"];
			return(val || "");
		},
		
		CurMedalValue() {
			var val;
			if (this.exp_CurMedal)
				val = this.exp_CurMedal["value"];
			return(val || -1);
		},
		
		CurMedalIsSecret() {
			var val;
			if (this.exp_CurMedal)
				val = (this.exp_CurMedal["secret"]) ? 1 : 0;
			return(val || -1);
		},
		
		CurMedalIsUnlocked() {
			var val;
			if (this.exp_CurMedal)
				val = (this.exp_CurMedal["unlocked"]) ? 1 : 0;
			return(val || -1);
		},
		
		LoopIndex() {
			return(this.exp_LoopIndex);
		},
		
		Index2MedalDescription(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["description"];
			return(val || "");
		},
		
		Index2MedalDifficulty(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["difficulty"];
			return(val || -1);
		},
		
		Index2MedalIcon() {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["icon"];
			return(val || "");
		},
		
		Index2MedalID(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["id"];
			ret.set_int(val || -1);
		},
		
		Index2MedalName(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["name"];
			return(val || "");
		},
		
		Index2MedalValue(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = this.lastMedals[index]["value"];
			return(val || -1);
		},
		
		Index2rMedalIsSecret(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = (this.lastMedals[index]["secret"]) ? 1 : 0;
			return(val || -1);
		},
		
		Index2MedalIsUnlocked(index) {
			var val;
			if (this.lastMedals && this.lastMedals[index])
				val = (this.lastMedals[index]["unlocked"]) ? 1 : 0;
			return(val || -1);
		},
		
		MedalsCount() {
			var val;
			if (this.lastMedals)
				val = this.lastMedals.lngth;
			return(val || 0);
		},
		
		LastUnlockedMedalID(){
			var val;
			if (this.lastResult && this.lastResult["medal"])
				val = this.lastResult["medal"]["id"];
			
			return(val || 0);
		}
	};
}