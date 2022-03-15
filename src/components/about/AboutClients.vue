<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the company I have worked with',
			clients: [
				{
					id: 1,
					title: 'Madania',
					img: require('@/assets/images/works/madaniacolorhorizontal.png'),
				},
				{
					id: 2,
					title: 'Btech',
					img: require('@/assets/images/works/btechcolor.png'),
				},
				
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
