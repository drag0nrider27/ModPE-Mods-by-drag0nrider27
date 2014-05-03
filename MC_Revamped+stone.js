/*MC Revamped*/

ModPE.setItem(500, "emerald", 0, "Emerald");
ModPE.setItem(410, "skull_creeper", 0, "EpicPick");
ModPE.setItem(412, "fireworks_charge", 0, "MagicalEssence");
ModPE.setItem(408, "fireball", 0, "ObsidianToolRod");
ModPE.setItem(411, "fireworks", 0, "MagicalIngot");
ModPE.setItem(413, "skull_wither", 0, "EpicShovel");
ModPE.setItem(414, "skull_zombie", 0, "EpicAxe");
ModPE.setFoodItem(409, 1, 14, 15);
ModPE.setFoodItem(467, 1, 2, 20);
ModPE.langEdit("item.MagicalEssence.name", "Magical Essence");
ModPE.langEdit("item.EpicAxe.name", "Epic Axe");
ModPE.langEdit("item.MagicalIngot.name", "Magical Ingot");
ModPE.langEdit("item.EpicPick.name", "Epic Pickaxe");
ModPE.langEdit("item.EpicShovel.name", "Epic Shovel");
ModPE.langEdit("item.ObsidianToolRod.name", "Obsidian Tool Rod");
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/VFPRR6v.jpg");
Item.addCraftRecipe(411, 1, 0, [412, 4, 0]);
Item.addCraftRecipe(410, 1, 0, [411, 3, 0, 408, 2, 0]);
Item.addCraftRecipe(413, 1, 0, [411, 1, 0, 408, 2, 0]);
Item.addCraftRecipe(414, 1, 0, [411, 3, 0, 408, 2, 0]);
Item.addCraftRecipe(408, 1, 0, [49, 2, 0]);
Item.addCraftRecipe(209, 4, 0, [98, 4, 0, 351, 1, 15]);
Item.setCategory(209, 8);
Item.setCategory(410, 2);
Item.setCategory(411, 2);
Item.setCategory(413, 2);
Item.setCategory(414, 2);
Item.setCategory(408, 2);
Item.addFurnaceRecipe(196, 500, 0);
Item.addFurnaceRecipe(197, 406, 0);
Item.addFurnaceRecipe(204, 412, 0);

function useItem(x, y, z, itemId, blockId, side)
{
if(itemId==410&&blockId==14)
{
setTile(x,y,z,0);
Player.addItemInventory(266,2,0);
}
else if(itemId==410&&blockId==15)
{
setTile(x,y,z,0);
Player.addItemInventory(265,2,0);
}
else if(itemId==410&&blockId==16)
{
setTile(x,y,z,0);
Player.addItemInventory(263,2,0);
}
else if(itemId==410&&blockId==21)
{
setTile(x,y,z,0);
Player.addItemInventory(351,2,4);
}
else if(itemId==410&&blockId==56)
{
setTile(x,y,z,0);
Player.addItemInventory(264,2,0);
}
else if(itemId==410&&blockId==73)
{
setTile(x,y,z,0);
Player.addItemInventory(331,8,0);
}
if(itemId==413&&blockId==2)
{
setTile(x,y,z,0);
Player.addItemInventory(2, 2, 0);
}
else if(itemId==413&&blockId==3)
{
setTile(x,y,z,0);
Player.addItemInventory(3, 2, 0);
}
else if(itemId==413&&blockId==12)
{
setTile(x,y,z,0);
Player.addItemInventory(20, 2, 0);
}
else if(itemId==413&&blockId==13)
{
setTile(x,y,z,0);
Player.addItemInventory(13, 1, 0);
Player.addItemInventory(318, 1, 0);
}
if(itemId==414&&blockId==17)
{
setTile(x,y,z,0);
Player.addItemInventory(17, 2, 0);
}
else if(itemId==410&&blockId==1)
{
setTile(x,y,z,0);
Player.addItemInventory(1,2,0);
}
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
clientMessage(ChatColor.GOLD + "Item ID's : " + ChatColor.DARK_PURPLE + "500, 190, 195, 196, 197, 198, 199, 200,"); clientMessage(ChatColor.DARK_PURPLE + "201, 202, 203, 204, 205, 206, 207, 208, 410, 412, 408, 409, 411, 413, 414,");
clientMessage(ChatColor.DARK_PURPLE + " ");
clientMessage(ChatColor.GOLD + "If Little Rodents Mod" + ChatColor.RED + " EXTRA");
clientMessage(ChatColor.GOLD + "Item ID's : " + ChatColor.DARK_PURPLE + "N/A Yet!");
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
Player.addItemInventory(413, 64, 0);
Player.addItemInventory(414, 64, 0);
Player.addItemInventory(408, 64, 0);
Player.addItemInventory(409, 64, 0);
Player.addItemInventory(411, 64, 0);
Player.addItemInventory(465, 64, 0);
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
clientMessage(ChatColor.DARK_GRAY + "Showing Help Page 2/2");
clientMessage(ChatColor.DARK_BLUE + "/help(page #)");
clientMessage(ChatColor.DARK_BLUE + "/Blocks");
clientMessage(ChatColor.DARK_BLUE + "/Tools");
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
if(cmd[0] == "Tools")
{
clientMessage(ChatColor.AQUA + "All Tools Added!");
Player.addItemInventory(410, 1, 0);
Player.addItemInventory(413, 1, 0);
Player.addItemInventory(414, 1, 0);
}
}

function newLevel()
{
clientMessage(ChatColor.BLUE + "Welcome to" + ChatColor.GREEN + " MC Revamped!");
clientMessage(ChatColor.AQUA + "By: drag0nrider27" + ChatColor.RED + " Version 1.6.4");
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
Block.defineBlock(209, "Bleached StoneBrick", [["stonebrick" , 0],
                                         ["stonebrick" , 0],
                                         ["stonebrick" , 0],
                                         ["stonebrick" , 0],
                                         ["stonebrick" , 0],
                                         ["stonebrick" , 0]], 6, true, 0);
Block.setDestroyTime(209, 2);
Block.setColor(209,[0xFFFFFF]);

}
