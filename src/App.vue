<template>
	<div id="app">
		<div class="container-fluid">
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<WavingText
							text="Vue waving text!"
							duration="1.1"
							side="30"
							fontsize="56"
							textClass="display-4 mb-30 text-shadow"
							fromcolor="white"
							tocolor="#95b0ad"
					/>
					<WavingText
							text="Play with settings below."
							duration="1.1"
							side="30"
							fontsize="20"
							textClass="lead mb-30"
							fromcolor="#1b1823"
							tocolor="#7b7075"
					/>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="card">
						<div class="card-header">
							Waving Text Settings
						</div>
						<div class="card-body">
							<div class="form-group">
								<label for="duration">Duration: {{ duration }}s </label>
								<input
										v-model="duration"
										type="range"
										step="0.1"
										min="0.1"
										max="1.5"
										class="form-control-range"
										id="duration">
							</div>
							<div class="form-group">
								<label for="distance">Distance: {{ distance }}</label>
								<input
										v-model="distance"
										type="range"
										min="10"
										max="280"
										class="form-control-range"
										id="distance">
							</div>
							<div class="form-group">
								<label for="font">Font: {{ font }}</label>
								<input
										v-model="font"
										type="range"
										min="20"
										max="100"
										class="form-control-range"
										id="font">
							</div>
							<p>Color text animation:</p>
							<div class="form-group">
								<label for="font">From color: {{ color }}</label>
								<input
										v-model="color"
										class="form-control"
										type="color">
							</div>
							<div class="form-group">
								<label for="font">To color: {{ color2 }}</label>
								<input
										v-model="color2"
										class="form-control"
										type="color">
							</div>

						</div>
					</div>
				</div>
				<div class="col-md-8 d-flex justify-content-center align-items-center">
					<WavingText
							text="Hello World!"
							:duration="duration"
							:side="distance"
							:fontsize="font"
							textClass="testClass"
							:fromcolor="color"
							:tocolor="color2"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import WavingText from './components/WavingText.vue';

export default {
	name: 'App',
	components: {
		WavingText,
	},
	data() {
		return {
			duration: '0.5',
			distance: '90',
			font: '70',
			color: '#ff8000',
			color2: '#800040',
		};
	},
};
</script>

<style lang="scss">
	#app{
		-webkit-font-smoothing:antialiased;
		-moz-osx-font-smoothing:grayscale;
		color:#2c3e50;
		width:100vw;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.container-fluid{
		padding-left:0;
		padding-right:0;
	}
	.mb-30{
		margin-bottom:30px;
		font-weight:bold;
	}
	body, html{
		overflow-x:hidden;
	}
	.text-shadow{
		text-shadow:0.1em 0.1em 0.2em black;
	}
	.jumbotron{
		background-image:url("https://images.unsplash.com/19/waves.JPG");
		background-position:center;
		background-repeat:no-repeat;
		background-size:cover;
		min-height:600px;
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
	}
	.testClass{
		font-weight:bold;
		/*		text-shadow:0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
				0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
				0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);*/
	}
</style>
