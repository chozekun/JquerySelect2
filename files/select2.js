/*

License:
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
file except in compliance with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the
License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

jQuery(function ($) {
	const selectize = function (node) {
		if (!(node instanceof HTMLSelectElement)) {
			return;
		}
		let element_width = node.offsetWidth;

		$(node).children("option").each(function () {
			if ($(node).is(":empty")) {
				$(node).html("&nbsp;");
			}
		});

		// calculate width of elements that are not visible
		if (!$(node).is(":visible")) {
			const clone = $(node).clone();
			clone.css("visibility", "hidden");
			$("body").append(clone);
			element_width = clone.outerWidth();
			clone.remove();
		}

		$(node).attr("data-placeholder", SELECTION_ONE_OPTION).select2({
			width: element_width + 60,
		});
	};

	$("select").each(function (_, node) {
		selectize(node);
	});
	const config = {
		childList: true,
		subtree: true,
	};
	const filters = $("#filters_form_open");
	if (filters.length === 0) {
		return;
	}
	const targetNode = filters[0];
	const observer = new MutationObserver(function (mutationRecords, observer) {
		observer.disconnect();
		for (const mutation of mutationRecords) {
			mutation.addedNodes.forEach(function (node) {
				selectize(node);
			});
		}
		observer.observe(targetNode, config);
	});
	observer.observe(targetNode, config);
});
