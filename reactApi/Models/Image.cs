using System.ComponentModel.DataAnnotations;

namespace reactApi.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Path { get; set; }


        public Image (int id, string name, string path)
        {
            Id = id;
            Name = name;
            Path = path;
        }
    }
}