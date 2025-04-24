import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingPersonalizationDesignUpdateBodyCarrierTextObj0
 */
export type IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 = {
  footerBody?: (string | string) | undefined;
  footerTitle?: (string | string) | undefined;
  headerBody?: (string | string) | undefined;
  headerTitle?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 = {
  footer_body?: (string | string) | undefined;
  footer_title?: (string | string) | undefined;
  header_body?: (string | string) | undefined;
  header_title?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignUpdateBodyCarrierTextObj0
 */
const SchemaIn$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0: z.ZodType<
  IssuingPersonalizationDesignUpdateBodyCarrierTextObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0
 */
const SchemaOut$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0: z.ZodType<
  External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 // the object to be transformed
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

export const Schemas$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 = {
  in: SchemaIn$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0,
  out: SchemaOut$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0,
};
