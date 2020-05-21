using OpenPockets.Enumerations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OpenPockets.Models
{
    public class Movement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
        [Required]
        public DateTime ExecutedAt { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public long Value { get; set; }
        [Required]
        public MovementType Type { get; set; }
        public string Notes { get; set; }

        [Required]
        public string PocketId { get; set; }
        [ForeignKey("PocketId")]
        public virtual Pocket Pocket { get; set; }

        [Required]
        public string SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
    }
}
