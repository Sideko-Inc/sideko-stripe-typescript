import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyTaxIdDataItem
 */
export type CustomerCreateBodyTaxIdDataItem = {
  type:
    | "ad_nrt"
    | "ae_trn"
    | "al_tin"
    | "am_tin"
    | "ao_tin"
    | "ar_cuit"
    | "au_abn"
    | "au_arn"
    | "ba_tin"
    | "bb_tin"
    | "bg_uic"
    | "bh_vat"
    | "bo_tin"
    | "br_cnpj"
    | "br_cpf"
    | "bs_tin"
    | "by_tin"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "cd_nif"
    | "ch_uid"
    | "ch_vat"
    | "cl_tin"
    | "cn_tin"
    | "co_nit"
    | "cr_tin"
    | "de_stn"
    | "do_rcn"
    | "ec_ruc"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "gn_nif"
    | "hk_br"
    | "hr_oib"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kh_tin"
    | "kr_brn"
    | "kz_bin"
    | "li_uid"
    | "li_vat"
    | "ma_vat"
    | "md_vat"
    | "me_pib"
    | "mk_vat"
    | "mr_nif"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "ng_tin"
    | "no_vat"
    | "no_voec"
    | "np_pan"
    | "nz_gst"
    | "om_vat"
    | "pe_ruc"
    | "ph_tin"
    | "ro_tin"
    | "rs_pib"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "sn_ninea"
    | "sr_fin"
    | "sv_nit"
    | "th_vat"
    | "tj_tin"
    | "tr_tin"
    | "tw_vat"
    | "tz_vat"
    | "ua_vat"
    | "ug_tin"
    | "us_ein"
    | "uy_ruc"
    | "uz_tin"
    | "uz_vat"
    | "ve_rif"
    | "vn_tin"
    | "za_vat"
    | "zm_tin"
    | "zw_tin";
  value: string;
};

/**
 * @internal
 * CustomerCreateBodyTaxIdDataItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyTaxIdDataItem = {
  type:
    | "ad_nrt"
    | "ae_trn"
    | "al_tin"
    | "am_tin"
    | "ao_tin"
    | "ar_cuit"
    | "au_abn"
    | "au_arn"
    | "ba_tin"
    | "bb_tin"
    | "bg_uic"
    | "bh_vat"
    | "bo_tin"
    | "br_cnpj"
    | "br_cpf"
    | "bs_tin"
    | "by_tin"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "cd_nif"
    | "ch_uid"
    | "ch_vat"
    | "cl_tin"
    | "cn_tin"
    | "co_nit"
    | "cr_tin"
    | "de_stn"
    | "do_rcn"
    | "ec_ruc"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "gn_nif"
    | "hk_br"
    | "hr_oib"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kh_tin"
    | "kr_brn"
    | "kz_bin"
    | "li_uid"
    | "li_vat"
    | "ma_vat"
    | "md_vat"
    | "me_pib"
    | "mk_vat"
    | "mr_nif"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "ng_tin"
    | "no_vat"
    | "no_voec"
    | "np_pan"
    | "nz_gst"
    | "om_vat"
    | "pe_ruc"
    | "ph_tin"
    | "ro_tin"
    | "rs_pib"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "sn_ninea"
    | "sr_fin"
    | "sv_nit"
    | "th_vat"
    | "tj_tin"
    | "tr_tin"
    | "tw_vat"
    | "tz_vat"
    | "ua_vat"
    | "ug_tin"
    | "us_ein"
    | "uy_ruc"
    | "uz_tin"
    | "uz_vat"
    | "ve_rif"
    | "vn_tin"
    | "za_vat"
    | "zm_tin"
    | "zw_tin";
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyTaxIdDataItem
 */
const SchemaIn$CustomerCreateBodyTaxIdDataItem: z.ZodType<
  CustomerCreateBodyTaxIdDataItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "ba_tin",
      "bb_tin",
      "bg_uic",
      "bh_vat",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "li_uid",
      "li_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyTaxIdDataItem
 */
const SchemaOut$CustomerCreateBodyTaxIdDataItem: z.ZodType<
  External$CustomerCreateBodyTaxIdDataItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyTaxIdDataItem // the object to be transformed
> = z
  .object({
    type: z.enum([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "ba_tin",
      "bb_tin",
      "bg_uic",
      "bh_vat",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "li_uid",
      "li_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

export const Schemas$CustomerCreateBodyTaxIdDataItem = {
  in: SchemaIn$CustomerCreateBodyTaxIdDataItem,
  out: SchemaOut$CustomerCreateBodyTaxIdDataItem,
};
