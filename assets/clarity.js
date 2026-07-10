/**
 * Microsoft Clarity — https://clarity.microsoft.com/
 * Set OMNI_CLARITY_PROJECT_ID below, then deploy. Empty = disabled (local preview).
 */
(function () {
    'use strict';

    var projectId = 'xk08syw62q';

    if (!projectId || typeof projectId !== 'string') return;
    projectId = projectId.trim();
    if (!/^[a-z0-9]+$/i.test(projectId)) return;

    (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);
})();
