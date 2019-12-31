"use strict";

{
	C3.Plugins.Rex_NGIO_Medal.Acts =
	{
		getHandler(self, successTrig, errorTrig, callback) {
			var handler = function (result) {
				if (callback)
					callback(result);

				self.lastResult = result;
				var trig = (result["success"]) ? successTrig : errorTrig;
				self.Trigger(trig);
			};
			return handler;
		},
		
		GetList() {
			var self = this;
			var getMedals = function (result) {
				if (result["success"]) {
					self.lastMedals = [];
					var medals = result["medals"], medal;
					var i, cnt = medals.length;
					for (i = 0; i < cnt; i++) {
						medal = medals[i];
						var data = {
							"description": medal["description"],
							"difficulty": medal["difficulty"],
							"icon": medal["icon"],
							"id": medal["id"],
							"name": medal["name"],
							"secret": medal["secret"],
							"value": medal["value"],
						};
						if (medal["unlocked"] != null)
							data["unlocked"] = medal["unlocked"];

						self.lastMedals.push(data);
					}
				}
				else {
					self.lastMedals = null;
				}

			};

			var cnds = C3.Plugins.Rex_NGIO_Medal.Cnds; //cr.plugins_.Rex_NGIO_Medal.prototype.cnds;
			var callback = C3.Plugins.Rex_NGIO_Medal.Acts.getHandler(this, cnds.OnGetMedalsListSuccess, cnds.OnGetMedalsListError, getMedals);
			this.GetNGIO()["callComponent"]("Medal.getList", {}, callback);
		},
		
		Unlock(id) {
			var cnds = C3.Plugins.Rex_NGIO_Medal.Cnds; //cr.plugins_.Rex_NGIO_Medal.prototype.cnds;
			var callback = C3.Plugins.Rex_NGIO_Medal.Acts.getHandler(this, cnds.OnUnlockMedalSuccess, cnds.OnUnlockMedalError);
			var param = {
				"id": id,
			};
			this.GetNGIO()["callComponent"]("Medal.unlock", param, callback);
		}
	};
}