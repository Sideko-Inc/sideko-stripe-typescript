import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingPersonalizationDesignCarrierText = {
  /**
   * The footer body text of the carrier letter.
   */
  footerBody?: string | null | undefined;
  /**
   * The footer title text of the carrier letter.
   */
  footerTitle?: string | null | undefined;
  /**
   * The header body text of the carrier letter.
   */
  headerBody?: string | null | undefined;
  /**
   * The header title text of the carrier letter.
   */
  headerTitle?: string | null | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignCarrierText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignCarrierText = {
  footer_body?: string | null | undefined;
  footer_title?: string | null | undefined;
  header_body?: string | null | undefined;
  header_title?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignCarrierText
 */
const SchemaIn$IssuingPersonalizationDesignCarrierText: z.ZodType<
  IssuingPersonalizationDesignCarrierText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    footer_body: z.string().nullable().optional(),
    footer_title: z.string().nullable().optional(),
    header_body: z.string().nullable().optional(),
    header_title: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      footer_body: "footerBody",
      footer_title: "footerTitle",
      header_body: "headerBody",
      header_title: "headerTitle",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignCarrierText
 */
const SchemaOut$IssuingPersonalizationDesignCarrierText: z.ZodType<
  External$IssuingPersonalizationDesignCarrierText, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignCarrierText // the object to be transformed
> = z
  .object({
    footerBody: z.string().nullable().optional(),
    footerTitle: z.string().nullable().optional(),
    headerBody: z.string().nullable().optional(),
    headerTitle: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      footerBody: "footer_body",
      footerTitle: "footer_title",
      headerBody: "header_body",
      headerTitle: "header_title",
    });
  });

export const Schemas$IssuingPersonalizationDesignCarrierText = {
  in: SchemaIn$IssuingPersonalizationDesignCarrierText,
  out: SchemaOut$IssuingPersonalizationDesignCarrierText,
};
