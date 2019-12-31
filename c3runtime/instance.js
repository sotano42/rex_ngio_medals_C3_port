"use strict";

{
	C3.Plugins.Rex_NGIO_Medal.Instance = class SingleGlobalInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);
			
			// Initialise object properties
			this.ngio = null;
			this.lastResult = null;
			this.lastMedals = null;
			this.exp_LoopIndex = 0;
		}
		
		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}
		
		GetNGIO() {
			if (this.ngio != null)
				return this.ngio;

			/*var plugins = this.runtime.types;
			var name, inst;
			for (name in plugins) {
				inst = plugins[name].instances[0];

				//if (cr.plugins_.Rex_NGIO_Authentication && (inst instanceof cr.plugins_.Rex_NGIO_Authentication.prototype.Instance)) {
				if (C3.Plugins.Rex_NGIO_Authentication && (inst instanceof C3.Plugins.Rex_NGIO_Authentication.prototype.Instance)) {
					this.ngio = inst.GetNGIO();
					return this.ngio;
				}
			}*/
			
			if (C3.Plugins.Rex_NGIO_Authentication) {
					this.ngio = C3.Plugins.Rex_NGIO_Authentication.Instance.prototype.GetNGIO();
					return this.ngio;
			}
			
			//assert2(this.ngio, "NGIO.Medal: Can not find NGIO Authentication oject.");
			alert(this.ngio, "NGIO.Medal: Can not find NGIO Authentication oject.");
			return null;
		}
	};
}