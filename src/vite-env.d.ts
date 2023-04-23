declare module '@vue/runtime-dom' {
	export interface GlobalComponents {
		Component: <T>(props: { is: T } & ExtractComponentProps<T>) => JSX.Element
	}
}

type ExtractComponentProps<T> = T extends new (...args: any) => { $props: infer P } ? P : {};

export { }
