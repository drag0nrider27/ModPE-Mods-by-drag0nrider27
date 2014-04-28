/*MC Revamped*/

ModPE.setItem(500, "emerald", 0, "Emerald");
ModPE.setItem(410, "skull_creeper", 0, "EpicPick");
ModPE.langEdit("item.EpicPick.name", "Epic Pickaxe");
Item.setMaxDamage(410, 369);
ModPE.setItem(412, "fireworks_charge", 0, "MagicalEssence");
ModPE.langEdit("item.MagicalEssence.name", "Magical Essence");
Item.addFurnaceRecipe(196, 500, 0);
Item.addFurnaceRecipe(197, 406, 0);
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/413pCaL.jpg");
Item.addFurnaceRecipe(204, 412, 0);
ModPE.setFoodItem(467, 1, 2, 20);
ModPE.setItem(408, "fireball", 0, "ObsidianToolRod");
ModPE.langEdit("item.ObsidianToolRod.name", "Obsidian Tool Rod");
Item.addCraftRecipe(410, 1, 0, [411, 3, 0, 407, 2, 0]);
Item.setCategory(410, 2);
Item.addCraftRecipe(408, 1, 0, [49, 2, 0]);
ModPE.setFoodItem(409, 1, 14, 15);
ModPE.setItem(411, "fireworks", 0, "MagicalIngot");
ModPE.langEdit("item.MagicalIngot.name", "Magical Ingot");
Item.addCraftRecipe(411, 1, 0, [408, 4, 0]);
Item.setCategory(411, 2);


function useItem(x, y, z, itemId, blockId, side)
{

}

function attackHook(attacker, victim)
{

}

function modTick()
{

}

function procCmd(command)
{
var cmd = command.split(" ");
if(cmd[0] == "help")
{
clientMessage(ChatColor.DARK_GRAY + "Showing Help Page 1/2");
clientMessage(ChatColor.DARK_BLUE + "/info");
clientMessage(ChatColor.DARK_BLUE + "/stuffs");
clientMessage(ChatColor.LIGHT_PURPLE + "Password (Below)");
clientMessage(ChatColor.DARK_BLUE + "/MC_Revamped");
clientMessage(ChatColor.DARK_BLUE + "/Ores");
}
if(cmd[0] == "info")
{
clientMessage(ChatColor.GOLD + "Item ID's : " + ChatColor.DARK_PURPLE + "500, 190, 195, 196, 197, 198, 199, 200,"); clientMessage(ChatColor.DARK_PURPLE + "201, 202, 203, 204, 205, 206, 207, 208, 410, 412, 408, 409, 411");
clientMessage(ChatColor.YELLOW + "sorry Item.addCraftRecipe " + ChatColor.RED + "CRASHES " + ChatColor.YELLOW + "the game!");
clientMessage(ChatColor.AQUA + "FIXED! :)");
}
if(cmd[0] == "stuffs")
{
clientMessage(ChatColor.LIGHT_PURPLE + "Password?");
}
if(cmd[0] == "MC_Revamped")
{
clientMessage(ChatColor.AQUA + "All Items Have Been Added To Your Inventory!");
Player.addItemInventory(500, 64, 0);
Player.addItemInventory(410, 64, 0);
Player.addItemInventory(412, 64, 0);
Player.addItemInventory(408, 64, 0);
Player.addItemInventory(409, 64, 0);
Player.addItemInventory(411, 64, 0);
Player.addItemInventory(465, 1, 0);
Player.addItemInventory(190, 64, 0);
Player.addItemInventory(195, 64, 0);
Player.addItemInventory(196, 64, 0);
Player.addItemInventory(197, 64, 0);
Player.addItemInventory(198, 64, 0);
Player.addItemInventory(199, 64, 0);
Player.addItemInventory(200, 64, 0);
Player.addItemInventory(201, 64, 0);
Player.addItemInventory(202, 64, 0);
Player.addItemInventory(203, 64, 0);
Player.addItemInventory(204, 64, 0);
Player.addItemInventory(205, 64, 0);
Player.addItemInventory(206, 64, 0);
Player.addItemInventory(207, 64, 0);
Player.addItemInventory(208, 64, 0);
}
if(cmd[0] == "help2")
{
clientMessage(ChatColor.DARK_GRAY + "Showing help page 2/2");
clientMessage(ChatColor.DARK_BLUE + "/help(page #)");
clientMessage(ChatColor.DARK_BLUE + "/Blocks");
}
if(cmd[0] == "Blocks")
{
clientMessage(ChatColor.AQUA + "All Blocks Added!");
Player.addItemInventory(190, 64, 0);
Player.addItemInventory(195, 64, 0);
Player.addItemInventory(196, 64, 0);
Player.addItemInventory(197, 64, 0);
Player.addItemInventory(198, 64, 0);
Player.addItemInventory(199, 64, 0);
Player.addItemInventory(200, 64, 0);
Player.addItemInventory(201, 64, 0);
Player.addItemInventory(202, 64, 0);
Player.addItemInventory(203, 64, 0);
Player.addItemInventory(204, 64, 0);
Player.addItemInventory(205, 64, 0);
Player.addItemInventory(206, 64, 0);
Player.addItemInventory(207, 64, 0);
Player.addItemInventory(208, 64, 0);
}
if(cmd[0] == "Ores")
{
clientMessage(ChatColor.AQUA + "All Ores Added!");
Player.addItemInventory(196, 64, 0);
Player.addItemInventory(197, 64, 0);
Player.addItemInventory(204, 64, 0);
}

}

function newLevel()
{
clientMessage(ChatColor.BLUE + "Welcome to" + ChatColor.GREEN + " MC Revamped!");
clientMessage(ChatColor.AQUA + "By: drag0nrider27" + ChatColor.RED + " Version 1.5.3");
Block.defineBlock(190, "Redstone Block", [["redstone_block", 0],
                                         ["redstone_block"  , 0],
                                         ["redstone_block", 0],
                                         ["redstone_block", 0],
                                         ["redstone_block", 0],
                                         ["redstone_block", 0]], 6, true, 0);
    Block.setDestroyTime(190, 2.0);
Block.defineBlock(195, "Emerald Block", [["emerald_block", 0],
                                         ["emerald_block"  , 0],
                                         ["emerald_block", 0],
                                         ["emerald_block", 0],
                                         ["emerald_block", 0],
                                         ["emerald_block", 0]], 6, true, 0);
    Block.setDestroyTime(195, 2.0);
Block.defineBlock(196, "Emerald Ore", [["emerald_ore", 0],
                                         ["emerald_ore"  , 0],
                                         ["emerald_ore", 0],
                                         ["emerald_ore", 0],
                                         ["emerald_ore", 0],
                                         ["emerald_ore", 0]], 6, true, 0);
    Block.setDestroyTime(196, 2.0);
Block.defineBlock(197, "Quartz Ore", [["quartz_ore", 0],
                                         ["quartz_ore"  , 0],
                                         ["quartz_ore", 0],
                                         ["quartz_ore", 0],
                                         ["quartz_ore", 0],
                                         ["quartz_ore", 0]], 6, true, 0);
    Block.setDestroyTime(197, 2.0);
Block.defineBlock(198, "Topiary Grass", [["grass", 3],
                                         ["grass"  , 3],
                                         ["grass", 3],
                                         ["grass", 3],
                                         ["grass", 3],
                                         ["grass", 3]], 6, true, 0);
    Block.setDestroyTime(198, 0.5);
Block.defineBlock(199, "Harvester S", [["piston_bottom" , 0],
                                         ["still_lava"  , 0],
                                         ["stonecutter", 2],
                                         ["stonecutter", 2],
                                         ["stonecutter", 2],
                                         ["stonecutter", 2]], 6, true, 0);
    Block.setDestroyTime(199, 3.0);
Block.setLightLevel(199, 10);
Block.defineBlock(200, "Mycelium", [["dirt" , 0],
                                         ["mycelium_top"  , 0],
                                         ["mycelium_side", 0],
                                         ["mycelium_side", 0],
                                         ["mycelium_side", 0],
                                         ["mycelium_side", 0]], 6, true, 0);
Block.setDestroyTime(200, 0.5);
Block.defineBlock(201, "Redstone Lamp", [["redstone_lamp_on" , 0],
                                         ["redstone_lamp_on"  , 0],
                                         ["redstone_lamp_on"  , 0],
                                         ["redstone_lamp_on"  , 0],
                                         ["redstone_lamp_on"  , 0],
                                         ["redstone_lamp_on"  , 0]], 6, true, 0);
Block.setDestroyTime(201, 0.3);
Block.setLightLevel(201, 15);
Block.defineBlock(202, "Enchanting Table", [["enchanting_table_bottom" , 0],
                                         ["enchanting_table_top"  , 0],
                                         ["enchanting_table_side"  , 0],
                                         ["enchanting_table_side"  , 0],
                                         ["enchanting_table_side"  , 0],
                                         ["enchanting_table_side"  , 0]], 6, true, 0);
Block.setDestroyTime(202, 4.0);
Block.setLightLevel(202, 7);
Block.defineBlock(203, "Soul Sand", [["soul_sand" , 0],
                                         ["soul_sand"  , 0],
                                         ["soul_sand"  , 0],
                                         ["soul_sand"  , 0],
                                         ["soul_sand"  , 0],
                                         ["soul_sand"  , 0]], 6, true, 0);
Block.setDestroyTime(203, 1.5);
Block.defineBlock(204, "Magical Flower", [["flower_rose_blue" , 0],                                         
                                         ["flower_rose_blue"  , 0],
                                         ["flower_rose_blue"  , 0],
                                         ["flower_rose_blue"  , 0],
                                         ["flower_rose_blue"  , 0],
                                         ["flower_rose_blue"  , 40]], 6, true, 1);
Block.setDestroyTime(204, 0.1);
Block.setLightLevel(204, 10);
Block.setColor(204, 0x5555FF);
Block.defineBlock(205, "JukeBox", [[" jukebox_side" , 0],
                                         ["jukebox_top"  , 0],
                                         ["jukebox_side"  , 0],
                                         ["jukebox_side"  , 0],
                                         ["jukebox_side"  , 0],
                                         ["jukebox_side"  , 0]], 6, true, 0);
Block.setDestroyTime(205, 2.0);
Block.defineBlock(206, "Mushroom Block Brown", [["mushroom_block_skin_brown" , 0],
                                         ["mushroom_block_skin_brown" , 0],
                                         ["mushroom_block_skin_brown" , 0],
                                         ["mushroom_block_skin_brown" , 0],
                                         ["mushroom_block_skin_brown" , 0],
                                         ["mushroom_block_skin_brown" , 0]], 6, true, 0);
Block.setDestroyTime(206, 0.5);
Block.defineBlock(207, "Mushroom Block Red", [["mushroom_block_skin_red" , 0],
                                         ["mushroom_block_skin_red" , 0],
                                         ["mushroom_block_skin_red" , 0],
                                         ["mushroom_block_skin_red" , 0],
                                         ["mushroom_block_skin_red" , 0],
                                         ["mushroom_block_skin_red" , 0]], 6, true, 0);
Block.setDestroyTime(207, 0.5);
Block.defineBlock(208, "Mushroom Stem", [["mushroom_block_inside" , 0],
                                         ["mushroom_block_inside" , 0],
                                         ["mushroom_block_skin_stem" , 0],
                                         ["mushroom_block_skin_stem" , 0],
                                         ["mushroom_block_skin_stem" , 0],
                                         ["mushroom_block_skin_stem" , 0]], 6, true, 0);
Block.setDestroyTime(208, 0.5);
}
