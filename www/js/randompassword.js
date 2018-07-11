function generatepass(length)
{
	var randomstring = Math.random().toString(36).slice(- length);
	return randomstring;
}