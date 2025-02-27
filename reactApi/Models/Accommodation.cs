
using System.ComponentModel.DataAnnotations;

namespace reactApi.Models
{
    public class Accommodation
    {
        [Key]
        public int Id { get; set;}
        [Required]
        [StringLength(50)]
        public string TitleENG {get; set;}
        [Required]
        [StringLength(50)]
        public string TitleEST {get; set;}
        [Required]
        [StringLength(50)]
        public string TitleRUS {get; set;}
        [Required]
        [StringLength(50)]
        public string TitleFIN {get; set;}
        [Required]
        [StringLength(248)]
        public string BodyENG {get; set;}
        [Required]
        [StringLength(248)]
        public string BodyEST {get; set;}
        [Required]
        [StringLength(248)]
        public string BodyRUS {get; set;}
        [Required]
        [StringLength(248)]
        public string BodyFIN {get; set;}
        public List<Image>? Images { get; set;} = new List<Image>();

        public Accommodation(string titleENG, string titleEST, string titleRUS, string titleFIN,
            string bodyENG, string bodyEST, string bodyRUS, string bodyFIN)
        {
            TitleENG = titleENG;
            TitleEST = titleEST;
            TitleRUS = titleRUS;
            TitleFIN = titleFIN;
            BodyENG = bodyENG;
            BodyEST = bodyEST;
            BodyRUS = bodyRUS;
            BodyFIN = bodyFIN;
        }
    }
}