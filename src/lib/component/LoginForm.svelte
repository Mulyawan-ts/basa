<script lang="ts">
	import { enhance } from '$app/forms';

	let loading = $state(false);
</script>

<div class="login-wrapper">
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-4">
		<legend class="fieldset-legend">Login</legend>

		<label class="label mt-2">Email</label>
		<input type="email" class="input" placeholder="Email" />

		<label class="label mt-3">Password</label>
		<input type="password" class="input" placeholder="Password" />

		<button class="btn btn-neutral w-full mt-4">Login</button>
	</fieldset>
</div>
