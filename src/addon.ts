import { type ColumnOptions } from "zotero-plugin-toolkit";
import { DialogHelper } from "zotero-plugin-toolkit";
import { createZToolkit } from "./utils/ztoolkit";
import hooks from "./hooks";
import prefsMenu from "./prefs-menu";

class Addon {
	public data: {
		alive: boolean;
		// Env type, see build.js
		env: "development" | "production";
		ztoolkit: ZToolkit;
		locale?: {
			current: any;
		};
		prefs?: {
			window: Window;
			columns: Array<ColumnOptions>;
			rows: Array<{ [dataKey: string]: string }>;
		};
		dialog?: DialogHelper;
	};
	// Lifecycle hooks
	public hooks: typeof hooks;
	public prefsMenu: typeof prefsMenu;
	// APIs
	public api: object;

	constructor() {
		this.data = {
			alive: true,
			env: __env__,
			ztoolkit: createZToolkit(),
		};
		this.hooks = hooks;
		this.prefsMenu = prefsMenu;
		this.api = {};
	}
}

export default Addon;
