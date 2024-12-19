using System;
using System.IO;

namespace reactApi
{
    public static class DotEnv 
    {
        public static void Load(string filePath)
        {
            if(!File.Exists(filePath))
                return;
            
            foreach(var line in File.ReadAllLines(filePath))
            {
                var lineParts = line.Split(
                    '=',
                    StringSplitOptions.RemoveEmptyEntries
                );

                if(lineParts.Length != 2)
                    continue;

                Environment.SetEnvironmentVariable(lineParts[0], lineParts[1]);
            }
        }
    }
}