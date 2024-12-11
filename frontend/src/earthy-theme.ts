import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const EarthyTheme: CustomThemeConfig = {
    name: 'earthy',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "25 16 7",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #E0862C 
		"--color-primary-50": "250 237 223", // #faeddf
		"--color-primary-100": "249 231 213", // #f9e7d5
		"--color-primary-200": "247 225 202", // #f7e1ca
		"--color-primary-300": "243 207 171", // #f3cfab
		"--color-primary-400": "233 170 107", // #e9aa6b
		"--color-primary-500": "224 134 44", // #E0862C
		"--color-primary-600": "202 121 40", // #ca7928
		"--color-primary-700": "168 101 33", // #a86521
		"--color-primary-800": "134 80 26", // #86501a
		"--color-primary-900": "110 66 22", // #6e4216
		// secondary | #90e9c5 
		"--color-secondary-50": "238 252 246", // #eefcf6
		"--color-secondary-100": "233 251 243", // #e9fbf3
		"--color-secondary-200": "227 250 241", // #e3faf1
		"--color-secondary-300": "211 246 232", // #d3f6e8
		"--color-secondary-400": "177 240 214", // #b1f0d6
		"--color-secondary-500": "144 233 197", // #90e9c5
		"--color-secondary-600": "130 210 177", // #82d2b1
		"--color-secondary-700": "108 175 148", // #6caf94
		"--color-secondary-800": "86 140 118", // #568c76
		"--color-secondary-900": "71 114 97", // #477261
		// tertiary | #68c2e1 
		"--color-tertiary-50": "232 246 251", // #e8f6fb
		"--color-tertiary-100": "225 243 249", // #e1f3f9
		"--color-tertiary-200": "217 240 248", // #d9f0f8
		"--color-tertiary-300": "195 231 243", // #c3e7f3
		"--color-tertiary-400": "149 212 234", // #95d4ea
		"--color-tertiary-500": "104 194 225", // #68c2e1
		"--color-tertiary-600": "94 175 203", // #5eafcb
		"--color-tertiary-700": "78 146 169", // #4e92a9
		"--color-tertiary-800": "62 116 135", // #3e7487
		"--color-tertiary-900": "51 95 110", // #335f6e
		// success | #3bb531 
		"--color-success-50": "226 244 224", // #e2f4e0
		"--color-success-100": "216 240 214", // #d8f0d6
		"--color-success-200": "206 237 204", // #ceedcc
		"--color-success-300": "177 225 173", // #b1e1ad
		"--color-success-400": "118 203 111", // #76cb6f
		"--color-success-500": "59 181 49", // #3bb531
		"--color-success-600": "53 163 44", // #35a32c
		"--color-success-700": "44 136 37", // #2c8825
		"--color-success-800": "35 109 29", // #236d1d
		"--color-success-900": "29 89 24", // #1d5918
		// warning | #ffb600 
		"--color-warning-50": "255 244 217", // #fff4d9
		"--color-warning-100": "255 240 204", // #fff0cc
		"--color-warning-200": "255 237 191", // #ffedbf
		"--color-warning-300": "255 226 153", // #ffe299
		"--color-warning-400": "255 204 77", // #ffcc4d
		"--color-warning-500": "255 182 0", // #ffb600
		"--color-warning-600": "230 164 0", // #e6a400
		"--color-warning-700": "191 137 0", // #bf8900
		"--color-warning-800": "153 109 0", // #996d00
		"--color-warning-900": "125 89 0", // #7d5900
		// error | #ff7a8b 
		"--color-error-50": "255 235 238", // #ffebee
		"--color-error-100": "255 228 232", // #ffe4e8
		"--color-error-200": "255 222 226", // #ffdee2
		"--color-error-300": "255 202 209", // #ffcad1
		"--color-error-400": "255 162 174", // #ffa2ae
		"--color-error-500": "255 122 139", // #ff7a8b
		"--color-error-600": "230 110 125", // #e66e7d
		"--color-error-700": "191 92 104", // #bf5c68
		"--color-error-800": "153 73 83", // #994953
		"--color-error-900": "125 60 68", // #7d3c44
		// surface | #ffc67b 
		"--color-surface-50": "255 246 235", // #fff6eb
		"--color-surface-100": "255 244 229", // #fff4e5
		"--color-surface-200": "255 241 222", // #fff1de
		"--color-surface-300": "255 232 202", // #ffe8ca
		"--color-surface-400": "255 215 163", // #ffd7a3
		"--color-surface-500": "255 198 123", // #ffc67b
		"--color-surface-600": "230 178 111", // #e6b26f
		"--color-surface-700": "191 149 92", // #bf955c
		"--color-surface-800": "153 119 74", // #99774a
		"--color-surface-900": "125 97 60", // #7d613c
		
	}
}