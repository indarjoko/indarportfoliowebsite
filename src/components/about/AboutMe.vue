<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'An IT experienced with more than 5 years in technical support, open source and GNU/Linux. Also experienced in visual designer that creates user interface design and graphic design such as mobile apps and creates website UI design, social media design, posters.',
				},
				{
					id: 2,
					bio:
						' Portfolio can be seen at https://uplabs.com/indarjoko, https://github.com/indarjoko and for real projects are Adinusa UI design (https://s.id/ADINUSAAppStore & https://s.id/ADINUSAPlayStore), Btech Website redesign (https://btech.id)',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/indarjoko.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
