<template>
	<div class="wavetext">
		<span
				v-for="(t, i) in innertext"
				:key="i"
				:class="textClass"
				:style="style(i)"
				v-html="renderLetter(t)"
		></span>

		<v-style>
			@keyframes {{ aniName }}{
			from{
			transform:translateY(0);
			color: {{ fromcolor }};
			}
			to{
			transform:translateY(-{{ side }}px);
			}
			}
		</v-style>
	</div>
</template>

<script>

export default {
	name: 'WavingText',
	components: {
		'v-style': {
			render(createElement) {
				return createElement('style', this.$slots.default);
			},
		},
	},
	props: {
		text: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			default: '0.3',
		},
		side: {
			type: String,
			default: '90',
		},
		fontsize: {
			type: String,
			default: '50',
		},
		textClass: {
			type: String,
			default: '',
		},
		fromcolor: {
			type: String,
			default: 'white',
		},
		tocolor: {
			type: String,
			default: 'black',
		},

	},
	data() {
		return {
			innertext: [...this.text],
			aniName: `_${Math.random().toString(36).substr(2, 9)}`,
		};
	},

	computed: {
		countChar() {
			return Number(this.innertext.length);
		},
	},
	mounted() {
		// console.log(this.aniName);
	},
	methods: {
		style(i) {
			const an = `animation-name:${this.aniName};`;
			const font = `font-size:${this.fontsize}px;`;
			const delay = `animation-delay:-${(this.countChar - i) * Number(this.duration) / this.countChar}s;`;
			const duration = `animation-duration:${this.duration}s;`;
			const color = `color: ${this.tocolor};`;
			return `${an} ${font} ${color} ${delay} ${duration}`;
		},
		renderLetter(t) {
			return (t === ' ') ? '&nbsp;' : t;
		},
	},
};
</script>

<style scoped>
	.wavetext span{
		display:inline-block;
		animation-iteration-count:infinite;
		animation-direction:alternate;
	}
</style>
