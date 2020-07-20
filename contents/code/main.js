"use strict";
function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var width = x == numberXslots
        ? Math.floor(maxArea.width / numberXslots)
        : Math.ceil(maxArea.width / numberXslots);
    var height = y == numberYslots
        ? Math.floor(maxArea.height / numberYslots)
        : Math.ceil(maxArea.height / numberYslots);
    var newX = maxArea.x + width * x;
    var newY = maxArea.y + height * y;
    return [newX, newY, width * xSlotToFill, height * ySlotToFill];
}
function reposition(client, x, y, width, height) {
    client.geometry = {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
        var newX = arr[0], newY = arr[1], w = arr[2], h = arr[3];
        reposition(client, newX, newY, w, h);
    }
}
function center(workspace) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var newX = maxArea.x + (maxArea.width - client.width) / 2;
        var newY = maxArea.y + (maxArea.height - client.height) / 2;
        reposition(client, newX, newY, client.width, client.height);
    }
}
registerShortcut("MoveWindowToUpLeft3x2", "UltrawideWindows: Move Window to up-left (3x2)", "Meta+Num+7", function () { return move(workspace, 3, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpCenter3x2", "UltrawideWindows: Move Window to up-center (3x2)", "Meta+Num+8", function () { return move(workspace, 3, 2, 1, 0, 1, 1); });
registerShortcut("MoveWindowToUpRight3x2", "UltrawideWindows: Move Window to up-right (3x2)", "Meta+Num+9", function () { return move(workspace, 3, 2, 2, 0, 1, 1); });
registerShortcut("MoveWindowToDownLeft3x2", "UltrawideWindows: Move Window to down-left (3x2)", "Meta+Num+1", function () { return move(workspace, 3, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToDownCenter3x2", "UltrawideWindows: Move Window to down-center (3x2)", "Meta+Num+2", function () { return move(workspace, 3, 2, 1, 1, 1, 1); });
registerShortcut("MoveWindowToDownRight3x2", "UltrawideWindows: Move Window to down-right (3x2)", "Meta+Num+3", function () { return move(workspace, 3, 2, 2, 1, 1, 1); });
registerShortcut("MoveWindowToLeftHeight3x2", "UltrawideWindows: Move Window to left-height (3x2)", "Meta+Num+4", function () { return move(workspace, 3, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToCenterHeight3x2", "UltrawideWindows: Move Window to center-height (3x2)", "Meta+Num+5", function () { return move(workspace, 3, 1, 1, 0, 1, 1); });
registerShortcut("MoveWindowToRightHeight3x2", "UltrawideWindows: Move Window to right-height (3x2)", "Meta+Num+6", function () { return move(workspace, 3, 1, 2, 0, 1, 1); });
registerShortcut("MoveWindowToUpLeft2x2", "UltrawideWindows: Move Window to up-left (2x2)", "ctrl+Num+7", function () { return move(workspace, 2, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpCenter2x2", "UltrawideWindows: Move Window to up-width (2x2)", "ctrl+Num+8", function () { return move(workspace, 1, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpRight2x2", "UltrawideWindows: Move Window to up-right (2x2)", "ctrl+Num+9", function () { return move(workspace, 2, 2, 1, 0, 1, 1); });
registerShortcut("MoveWindowToDownLeft2x2", "UltrawideWindows: Move Window to down-left (2x2)", "ctrl+Num+1", function () { return move(workspace, 2, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToDownCenter2x2", "UltrawideWindows: Move Window to down-width (2x2)", "ctrl+Num+2", function () { return move(workspace, 1, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToDownRight2x2", "UltrawideWindows: Move Window to down-right (2x2)", "ctrl+Num+3", function () { return move(workspace, 2, 2, 1, 1, 1, 1); });
registerShortcut("MoveWindowToLeftHeight2x2", "UltrawideWindows: Move Window to left-height (2x2)", "ctrl+Num+4", function () { return move(workspace, 2, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToRightHeight2x2", "UltrawideWindows: Move Window to right-height (2x2)", "ctrl+Num+6", function () { return move(workspace, 2, 1, 1, 0, 1, 1); });
registerShortcut("MoveWindowToUpLeft4x2_centerbiased", "UltrawideWindows: Move Window to up-left (4x2 center biased)", "Ctrl+Meta+Num+7", function () { return move(workspace, 4, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpCenter4x2_centerbiased", "UltrawideWindows: Move Window to up-center (4x2 center biased)", "Ctrl+Meta+Num+8", function () { return move(workspace, 4, 2, 1, 0, 2, 1); });
registerShortcut("MoveWindowToUpRight4x2_centerbiased", "UltrawideWindows: Move Window to up-right (4x2 center biased)", "Ctrl+Meta+Num+9", function () { return move(workspace, 4, 2, 3, 0, 1, 1); });
registerShortcut("MoveWindowToDownLeft4x2_centerbiased", "UltrawideWindows: Move Window to down-left (4x2 center biased)", "Ctrl+Meta+Num+1", function () { return move(workspace, 4, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToDownCenter4x2_centerbiased", "UltrawideWindows: Move Window to down-center (4x2 center biased)", "Ctrl+Meta+Num+2", function () { return move(workspace, 4, 2, 1, 1, 2, 1); });
registerShortcut("MoveWindowToDownRight4x2_centerbiased", "UltrawideWindows: Move Window to down-right (4x2 center biased)", "Ctrl+Meta+Num+3", function () { return move(workspace, 4, 2, 3, 1, 1, 1); });
registerShortcut("MoveWindowToLeftHeight4x2_centerbiased", "UltrawideWindows: Move Window to left-height (4x2 center biased)", "Ctrl+Meta+Num+4", function () { return move(workspace, 4, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToCenterHeight4x2_centerbiased", "UltrawideWindows: Move Window to center-height (4x2 center biased)", "Ctrl+Meta+Num+5", function () { return move(workspace, 4, 1, 1, 0, 2, 1); });
registerShortcut("MoveWindowToRightHeight4x2_centerbiased", "UltrawideWindows: Move Window to right-height (4x2 center biased)", "Ctrl+Meta+Num+6", function () { return move(workspace, 4, 1, 3, 0, 1, 1); });
registerShortcut("MoveWindowToUpLeft23", "UltrawideWindows: Move Window to fit up-left 2/3 width ", "alt+Num+7", function () { return move(workspace, 3, 2, 0, 0, 2, 1); });
registerShortcut("MoveWindowToUpCenter23", "UltrawideWindows: Move Window to up-width 2/3", "alt+Num+8", function () { return move(workspace, 1, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpRight23", "UltrawideWindows: Move Window to fit up-right 2/3 width ", "alt+Num+9", function () { return move(workspace, 3, 2, 1, 0, 2, 1); });
registerShortcut("MoveWindowToFitDownLeft23", "UltrawideWindows: Move Window to fit down-left 2/3 width ", "alt+Num+1", function () { return move(workspace, 3, 2, 0, 1, 2, 1); });
registerShortcut("MoveWindowToDownCenter23", "UltrawideWindows: Move Window to down-width 2/3", "alt+Num+2", function () { return move(workspace, 1, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToFitDownRight23", "UltrawideWindows: Move Window to fit down-right 2/3 width ", "alt+Num+3", function () { return move(workspace, 3, 2, 1, 1, 2, 1); });
registerShortcut("MoveWindowToLeftHeight23", "UltrawideWindows: Move Window to fit left-height 2/3 width ", "alt+Num+4", function () { return move(workspace, 3, 1, 0, 0, 2, 1); });
registerShortcut("MoveWindowToRightHeight23", "UltrawideWindows: Move Window to fit right-height 2/3 width ", "alt+Num+6", function () { return move(workspace, 3, 1, 1, 0, 2, 1); });
registerShortcut("MoveWindowToUpLeft23_center_biased", "UltrawideWindows: Move Window to fit up-left 2/3 width (center biased)", "alt+meta+Num+7", function () { return move(workspace, 6, 2, 0, 0, 1, 1); });
registerShortcut("MoveWindowToUpCenter23_center_biased", "UltrawideWindows: Move Window to up-center 2/3 (center biased)", "alt+meta+Num+8", function () { return move(workspace, 6, 2, 1, 0, 4, 1); });
registerShortcut("MoveWindowToUpRight23_center_biased", "UltrawideWindows: Move Window to fit up-right 2/3 width (center biased)", "alt+meta+Num+9", function () { return move(workspace, 6, 2, 5, 0, 1, 1); });
registerShortcut("MoveWindowToFitDownLeft23_center_biased", "UltrawideWindows: Move Window to fit down-left 2/3 width (center biased)", "alt+meta+Num+1", function () { return move(workspace, 6, 2, 0, 1, 1, 1); });
registerShortcut("MoveWindowToDownCenter23_center_biased", "UltrawideWindows: Move Window to down-center 2/3 (center biased)", "alt+meta+Num+2", function () { return move(workspace, 6, 2, 1, 1, 4, 1); });
registerShortcut("MoveWindowToFitDownRight23_center_biased", "UltrawideWindows: Move Window to fit down-right 2/3 width (center biased)", "alt+meta+Num+3", function () { return move(workspace, 6, 2, 5, 1, 1, 1); });
registerShortcut("MoveWindowToLeftHeight23_center_biased", "UltrawideWindows: Move Window to fit left-height 2/3 width (center biased)", "alt+meta+Num+4", function () { return move(workspace, 6, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToCenterHeight23_center_biased", "UltrawideWindows: Move Window to fit center-height 2/3 width (center biased)", "alt+meta+Num+5", function () { return move(workspace, 6, 1, 1, 0, 4, 1); });
registerShortcut("MoveWindowToRightHeight23_center_biased", "UltrawideWindows: Move Window to fit right-height 2/3 width (center biased)", "alt+meta+Num+6", function () { return move(workspace, 6, 1, 5, 0, 1, 1); });
registerShortcut("MoveWindowToMaximize", "UltrawideWindows: Maximize Window", "Meta+Num+0", function () { return move(workspace, 1, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToMaximize1", "UltrawideWindows: Maximize Window (copy)", "alt+Num+0", function () { return move(workspace, 1, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToMaximize2", "UltrawideWindows: Maximize Window (copy2)", "ctrl+Num+0", function () { return move(workspace, 1, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToMaximize3", "UltrawideWindows: Maximize Window (copy2)", "ctrl+meta+Num+0", function () { return move(workspace, 1, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToMaximize4", "UltrawideWindows: Maximize Window (copy2)", "alt+meta+Num+0", function () { return move(workspace, 1, 1, 0, 0, 1, 1); });
registerShortcut("MoveWindowToCenter", "UltrawideWindows: Center Window", "ctrl+Num+5", function () { return center(workspace); });
registerShortcut("MoveWindowToCenter1", "UltrawideWindows: Center Window (copy)", "alt+Num+5", function () { return center(workspace); });
