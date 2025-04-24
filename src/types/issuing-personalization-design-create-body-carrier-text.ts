import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Hash containing carrier text, for use with physical bundles that support carrier text.
 */
export type IssuingPersonalizationDesignCreateBodyCarrierText = {
  footerBody?: (string | string) | undefined;
  footerTitle?: (string | string) | undefined;
  headerBody?: (string | string) | undefined;
  headerTitle?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignCreateBodyCarrierText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignCreateBodyCarrierText = {
  footer_body?: (string | string) | undefined;
  footer_title?: (string | string) | undefined;
  header_body?: (string | string) | undefined;
  header_title?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignCreateBodyCarrierText
 */
const SchemaIn$IssuingPersonalizationDesignCreateBodyCarrierText: z.ZodType<
  IssuingPersonalizationDesignCreateBodyCarrierText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    footer_body: z.union([z.string(), z.string()]).optional(),
    footer_title: z.union([z.string(), z.string()]).optional(),
    header_body: z.union([z.string(), z.string()]).optional(),
    header_title: z.union([z.string(), z.string()]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignCreateBodyCarrierText
 */
const SchemaOut$IssuingPersonalizationDesignCreateBodyCarrierText: z.ZodType<
  External$IssuingPersonalizationDesignCreateBodyCarrierText, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignCreateBodyCarrierText // the object to be transformed
> = z
  .object({
    footerBody: z.union([z.string(), z.string()]).optional(),
    footerTitle: z.union([z.string(), z.string()]).optional(),
    headerBody: z.union([z.string(), z.string()]).optional(),
    headerTitle: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      footerBody: "footer_body",
      footerTitle: "footer_title",
      headerBody: "header_body",
      headerTitle: "header_title",
    });
  });

export const Schemas$IssuingPersonalizationDesignCreateBodyCarrierText = {
  in: SchemaIn$IssuingPersonalizationDesignCreateBodyCarrierText,
  out: SchemaOut$IssuingPersonalizationDesignCreateBodyCarrierText,
};
