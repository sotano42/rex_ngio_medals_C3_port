"use strict";

{
	C3.Plugins.Rex_NGIO_Medal.Cnds =
	{
		OnGetMedalsListSuccess()
		{
			return true;
		},
		
		OnGetMedalsListError(){
			return true;
		},
		
		ForEachMedal(){
			if (!this.lastMedals)
				return false;

			/*var current_frame = this.runtime.getCurrentEventStack();
			var current_event = current_frame.current_event;
			var solModifierAfterCnds = current_frame.isModifierAfterCnds();

			var i, cnt = this.lastMedals.length;
			for (i = 0; i < cnt; i++) {
				if (solModifierAfterCnds)
					this.runtime.pushCopySol(current_event.solModifiers);

				this.exp_LoopIndex = i;
				this.exp_CurMedal = this.lastMedals[this.exp_LoopIndex];
				current_event.retrigger();

				if (solModifierAfterCnds)
					this.runtime.popSol(current_event.solModifiers);
			}*/
			
			const runtime = this._runtime;
			const eventSheetManager = runtime.GetEventSheetManager();
			const currentEvent = runtime.GetCurrentEvent();
			const solModifiers = currentEvent.GetSolModifiers();
			const eventStack = runtime.GetEventStack();

			// Get current stack frame and push new one
			const oldFrame = eventStack.GetCurrentStackFrame();
			const newFrame = eventStack.Push(currentEvent);

			/*for (const item of myArray)
			{
				// ... optionally update state here ...

				// Push a copy of the current SOL
				eventSheetManager.PushCopySol(solModifiers);

				// Retrigger the current event, running a single loop iteration
				currentEvent.Retrigger(oldFrame, newFrame);

				// Pop the current SOL
				eventSheetManager.PopSol(solModifiers);
			}*/
			
			var i, cnt = this.lastMedals.length;
			for (i = 0; i < cnt; i++) {
				if (solModifiers)
					eventSheetManager.PushCopySol(solModifiers);
					//this.runtime.pushCopySol(current_event.solModifiers);

				this.exp_LoopIndex = i;
				this.exp_CurMedal = this.lastMedals[this.exp_LoopIndex];
				currentEvent.Retrigger(oldFrame, newFrame);
				//current_event.retrigger();

				if (solModifiers)
					eventSheetManager.PopSol(solModifiers);
					//this.runtime.popSol(current_event.solModifiers);
			}

			// Pop the event stack frame
			eventStack.Pop();

			// Return false since event already executed
			return false;
		},
		
		CurMedalIsSecret(){
			return this.exp_CurMedal && this.exp_CurMedal["secret"];
		},
		
		CurMedalIsUnlocked() {
			return this.exp_CurMedal && this.exp_CurMedal["unlocked"];
		},

		CompareCurMedalDifficulty(cmp, s) {
			if (this.exp_CurMedal && this.exp_CurMedal["difficulty"])
				return cr.do_cmp(this.exp_CurMedal["difficulty"], cmp, s - 1);

			return false;
		},

		Index2MedalIsSecret(index) {
			return this.lastMedals && this.lastMedals[index] && this.lastMedals[index]["secret"];
		},

		Index2MedalIsUnlocked(index) {
			return this.lastMedals && this.lastMedals[index] && this.lastMedals[index]["unlocked"];
		},

		CompareIndex2MedalDifficulty(index, cmp, s) {
			if (this.lastMedals && this.lastMedals[index])
				return cr.do_cmp(this.lastMedals[index]["difficulty"], cmp, s - 1); //cr.do_cmp

			return false;
		},

		OnUnlockMedalSuccess() { return true; },
		
		OnUnlockMedalError() { return true; }
	};
}