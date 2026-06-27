<!-- sidebar component -->
<div class="drawer lg:drawer-open">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-3" class="btn drawer-button lg:hidden"> Open drawer </label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a href="/dashboard">Summary</a></li>
			<li><a href="/dashboard/receipt">Receipt</a></li>
			<li><a>Payment</a></li>
		</ul>
	</div>
</div>
