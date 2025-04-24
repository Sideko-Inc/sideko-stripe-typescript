import {
  External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
  Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
  TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
} from "./test-helper-issuing-personalization-design-reject-body-rejection-reasons";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingPersonalizationDesignRejectBody
 */
export type TestHelperIssuingPersonalizationDesignRejectBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The reason(s) the personalization design was rejected.
   */
  rejectionReasons: TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingPersonalizationDesignRejectBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingPersonalizationDesignRejectBody = {
  expand?: string[] | undefined;
  rejection_reasons: External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons
    | External$TestHelperIssuingPersonalizationDesignRejectBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingPersonalizationDesignRejectBody
 */
const SchemaIn$TestHelperIssuingPersonalizationDesignRejectBody: z.ZodType<
  TestHelperIssuingPersonalizationDesignRejectBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    rejection_reasons:
      Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons.in,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      rejection_reasons: "rejectionReasons",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingPersonalizationDesignRejectBody
 */
const SchemaOut$TestHelperIssuingPersonalizationDesignRejectBody: z.ZodType<
  External$TestHelperIssuingPersonalizationDesignRejectBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingPersonalizationDesignRejectBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    rejectionReasons:
      Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons.out,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      rejectionReasons: "rejection_reasons",
    });
  });

export const Schemas$TestHelperIssuingPersonalizationDesignRejectBody = {
  in: SchemaIn$TestHelperIssuingPersonalizationDesignRejectBody,
  out: SchemaOut$TestHelperIssuingPersonalizationDesignRejectBody,
};
